(() => {
  'use strict';
  const people=window.FAMILY_ARCHIVE.people;
  const $=s=>document.querySelector(s);
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const viewport=$('#tree-viewport'),canvas=$('#tree-canvas'),scene=$('#tree-scene');
  const size={nodeW:156,nodeH:83,gap:174,row:145,pad:48};
  let positions=new Map(),scale=1,layoutW=1000,layoutH=600,active='1',drag=null;
  const generation=id=>Math.floor(Math.log2(Number(id)));
  const doubtful=s=>/tentative|conflict/i.test(s||'');
  function pathToMargot(id){const path=new Set();let n=Number(id);while(Number.isFinite(n)&&n>=1){path.add(String(n));n=Math.floor(n/2)}return path}
  function highlight(){
    const path=pathToMargot(active);
    scene.querySelectorAll('[data-tree-person]').forEach(button=>{
      const id=button.dataset.treePerson;button.setAttribute('aria-pressed',String(id===active));button.classList.toggle('in-line',path.has(id)&&id!==active);
    });
    scene.querySelectorAll('[data-tree-child]').forEach(line=>line.classList.toggle('in-line',path.has(line.dataset.treeChild)&&path.has(line.dataset.treeParent)));
    $('#extended-family-list').querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.selectPerson===active)));
  }
  function updateScale(){
    const width=Math.max(viewport.clientWidth,layoutW*scale),height=Math.max(viewport.clientHeight,layoutH*scale);
    canvas.style.width=width+'px';canvas.style.height=height+'px';
    scene.style.width=layoutW+'px';scene.style.height=layoutH+'px';scene.style.transform=`scale(${scale})`;
    scene.style.left=Math.max(0,(width-layoutW*scale)/2)+'px';scene.style.top=Math.max(0,(height-layoutH*scale)/2)+'px';
    $('#tree-zoom-value').textContent=Math.round(scale*100)+'%';
    $('#tree-zoom-out').disabled=scale<=.25;$('#tree-zoom-in').disabled=scale>=1.5;
  }
  function center(id){
    const pos=positions.get(id);if(!pos)return;
    viewport.scrollTo({left:Math.max(0,pos.x*scale-viewport.clientWidth/2),top:Math.max(0,(pos.y+size.nodeH/2)*scale-viewport.clientHeight/2),behavior:'auto'});
  }
  function fit(){scale=Math.min(1,(viewport.clientWidth-24)/layoutW,(viewport.clientHeight-24)/layoutH);scale=Math.max(.25,scale);updateScale();viewport.scrollTo({left:0,top:0,behavior:'auto'})}
  function render({fitView=true}={}){
    const root=$('#tree-branch').value;
    positions=new Map();let leaf=0;
    function place(id){
      const p=people[id],g=generation(id),parents=p.parents.filter(e=>people[e.id]?.direct);
      let x;
      if(parents.length){const xs=parents.map(e=>place(e.id));x=xs.reduce((a,b)=>a+b,0)/xs.length}
      else {x=size.pad+size.nodeW/2+leaf*size.gap;leaf++}
      positions.set(id,{x,y:0,g,parents});return x;
    }
    place(root);
    const topGen=Math.max(...Array.from(positions.values()).map(p=>p.g));
    const bottomGen=generation(root);
    for(const p of positions.values())p.y=size.pad+(topGen-p.g)*size.row;
    layoutW=2*size.pad+size.nodeW+Math.max(0,leaf-1)*size.gap;
    layoutH=2*size.pad+size.nodeH+(topGen-bottomGen)*size.row;
    const edges=[];
    for(const [child,node] of positions){
      for(const edge of node.parents){const parent=positions.get(edge.id),mid=(parent.y+size.nodeH+node.y)/2;edges.push(`<path class="pedigree-connector ${doubtful(edge.status)?'uncertain':''}" data-tree-child="${child}" data-tree-parent="${edge.id}" d="M ${parent.x} ${parent.y+size.nodeH} V ${mid} H ${node.x} V ${node.y}"/>`)}
    }
    const nodes=Array.from(positions).map(([id,pos])=>{
      const p=people[id];
      return `<button type="button" class="pedigree-person ${p.tentative?'tentative':''}" data-tree-person="${id}" data-select-person="${id}" aria-pressed="${id===active}" style="left:${pos.x-size.nodeW/2}px;top:${pos.y}px" aria-label="${esc(p.name+', '+p.lifespan+(p.tentative?', tentative ancestry':''))}">${p.tentative?'<span class="node-context">Tentative</span>':''}<strong>${esc(p.name)}</strong><small>${esc(p.lifespan)}</small></button>`;
    }).join('');
    scene.innerHTML=`<svg class="pedigree-connections" width="${layoutW}" height="${layoutH}" aria-hidden="true">${edges.join('')}</svg>${nodes}`;
    $('#tree-count').textContent=`${positions.size} people shown · earlier generations above`;
    $('#tree-title').textContent=root==='1'?'Margot’s direct ancestry':root==='2'?'The Bachrach branch':'The Baum branch';
    highlight();if(fitView)fit();else updateScale();
  }
  function select(id){
    active=id;
    if(people[id].direct && !positions.has(id)){
      const branch=$('#tree-branch').value;
      if(branch!=='1' && people[id].branch!==(branch==='2'?'bachrach':'baum'))$('#tree-branch').value='1';
      render({fitView:false});scale=Math.max(.75,scale);updateScale();center(id);
    } else highlight();
  }
  $('#extended-family-list').innerHTML=Object.values(people).filter(p=>!p.direct).map(p=>`<button type="button" class="extended-person" data-select-person="${p.id}" aria-pressed="false">${esc(p.name)}</button>`).join('');
  $('#tree-branch').addEventListener('change',()=>render());
  $('#tree-fit').addEventListener('click',fit);
  function zoom(factor){const midX=(viewport.scrollLeft+viewport.clientWidth/2)/scale,midY=(viewport.scrollTop+viewport.clientHeight/2)/scale;scale=Math.max(.25,Math.min(1.5,scale*factor));updateScale();viewport.scrollTo({left:Math.max(0,midX*scale-viewport.clientWidth/2),top:Math.max(0,midY*scale-viewport.clientHeight/2),behavior:'auto'})}
  $('#tree-zoom-in').addEventListener('click',()=>zoom(1.2));$('#tree-zoom-out').addEventListener('click',()=>zoom(1/1.2));
  viewport.addEventListener('pointerdown',e=>{if(e.button!==0||e.target.closest('button'))return;drag={x:e.clientX,y:e.clientY,left:viewport.scrollLeft,top:viewport.scrollTop};viewport.setPointerCapture(e.pointerId);viewport.classList.add('dragging')});
  viewport.addEventListener('pointermove',e=>{if(!drag)return;viewport.scrollLeft=drag.left-e.clientX+drag.x;viewport.scrollTop=drag.top-e.clientY+drag.y});
  const endDrag=()=>{drag=null;viewport.classList.remove('dragging')};viewport.addEventListener('pointerup',endDrag);viewport.addEventListener('pointercancel',endDrag);
  window.familyPedigree={select,fit};
  render();
})();
