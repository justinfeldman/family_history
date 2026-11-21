(() => {
  'use strict';
  const data = window.FAMILY_ARCHIVE;
  const people = data.people, places = data.places;
  const $ = s => document.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/kauffmann/g,'kaufmann').replace(/gruen/g,'grun');
  const uncertain = status => /tentative|conflict|estimated|approximate/i.test(status || '');
  const order = ['Margot','Parents','Grandparents','Great-grandparents','Great-great-grandparents','Earlier generations','Extended family'];
  let activeId = '1', activePlace = null, activeEvent = -1, placeIds = [];
  const state = new URLSearchParams(location.hash.replace(/^#/,''));
  if (people[state.get('person')]) activeId = state.get('person');

  function sourceLink(source) {
    const s = typeof source === 'string' ? data.sources[source] : source;
    return s ? `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)} ↗</a>` : '';
  }
  function isTentative(p) { return p.tentative || p.parents.some(e => uncertain(e.status)); }
  function relation(p) {
    if (p.relation) return p.relation;
    if (p.id === '1') return 'Margot Bachrach Feldman';
    const n = Number(p.id), g = Math.floor(Math.log2(n));
    const sex = n % 2 ? 'mother' : 'father';
    const r = g === 1 ? sex : g === 2 ? 'grand'+sex : g === 3 ? 'great-grand'+sex : g === 4 ? 'great-great-grand'+sex : `${g-2}× great-grand${sex}`;
    return `${p.tentative ? 'Proposed ' : ''}${r} of Margot`;
  }
  function updateHash() {
    const q = new URLSearchParams({person:activeId});
    if (activePlace) q.set('place',activePlace);
    const hash = '#'+q.toString();
    if (location.hash !== hash) history.pushState(null,'',hash);
  }
  function renderList() {
    const q = normalize($('#person-search').value.trim()), filter = $('#branch-filter').value;
    const result = Object.values(people).filter(p => {
      const hay = normalize([p.name,p.id,...(p.aliases || []),...p.events.map(e => e.location)].join(' '));
      return (!q || hay.includes(q)) && (filter === 'all' || filter === 'extended' && !p.direct || filter === 'tentative' && isTentative(p) || p.branch === filter || p.branch === 'both' && ['baum','bachrach'].includes(filter));
    });
    $('#person-count').textContent = `${result.length} of ${Object.keys(people).length} people`;
    $('#person-list').innerHTML = result.length ? order.map(group => {
      const members = result.filter(p => p.group === group);
      return members.length ? `<div class="person-group"><h3 class="person-group-title">${esc(group)}</h3>${members.map(p => `<button type="button" class="person-button" data-select-person="${p.id}" data-list-person="true" aria-pressed="${p.id===activeId}"><strong>${esc(p.name)}</strong><small>${esc(p.lifespan)}</small>${p.tentative ? '<span class="tentative-dot">◇ Tentative ancestry</span>':''}</button>`).join('')}</div>` : '';
    }).join('') : '<p class="empty-state">No matching people.<br>Try a surname, village, or another branch.</p>';
  }
  function relativeButton(id, status) {
    const p=people[id];
    return `<button type="button" class="relative-button ${uncertain(status)?'uncertain':''}" data-select-person="${esc(id)}">${esc(p.name)}${status?`<small>${esc(status)}</small>`:''}</button>`;
  }
  function renderConnections(p) {
    let h = '<p class="family-label">Parents</p>';
    h += p.parents.length ? `<div class="relative-row">${p.parents.map(e=>relativeButton(e.id,e.status)).join('')}</div><div class="family-stem" aria-hidden="true"></div>` : '<p class="family-none">Not yet established in this archive.</p>';
    h += `<div class="family-self ${p.tentative?'tentative':''}">${esc(p.name)}</div>`;
    if (p.children.length) h+=`<div class="family-stem" aria-hidden="true"></div><p class="family-label">Children in this archive</p><div class="relative-row">${p.children.map(id=>relativeButton(id,people[id].parents.find(e=>e.id===p.id)?.status)).join('')}</div>`;
    if (p.spouses.length) h+=`<p class="family-label">Spouse${p.spouses.length>1?'s':''} in this archive</p><div class="relative-row">${p.spouses.map(id=>relativeButton(id)).join('')}</div>`;
    $('#family-connections').innerHTML = h;
  }
  function renderEvents(p) {
    $('#event-count').textContent = `${p.events.length} event${p.events.length===1?'':'s'}`;
    $('#life-events').innerHTML = p.events.length ? p.events.map((e,i) => `<li><button class="event-button" type="button" data-event="${i}" ${places[e.place]?'':'disabled'} aria-pressed="${i===activeEvent}"><span class="event-symbol" aria-hidden="true">${e.type==='Birth'?'✧':e.type==='Death'?'◇':e.type==='Marriage'?'∞':'·'}</span><span><strong>${esc(e.type)}</strong><time>${esc(e.date)}</time><span class="event-location">${esc(e.location)}</span>${e.detail?`<span class="event-detail">${esc(e.detail)}</span>`:''}<span class="event-status ${uncertain(e.status)?'uncertain':''}">${esc(e.status)}</span></span></button></li>`).join('') : '<li class="family-none">No dated or located event is established yet.</li>';
  }
  function renderEvidence(p) {
    const ids = [...new Set([...p.sources,...p.events.flatMap(e=>e.sources || [])])];
    let path = [];
    if (p.direct && p.id !== '1') {
      let n = Number(p.id);
      while (people[String(n)] && n>=1) { path.push(String(n)); if(n===1)break; n=Math.floor(n/2); }
    }
    $('#person-evidence').innerHTML = `<section class="evidence-notes"><h3>Evidence &amp; open questions</h3>${p.notes.length?`<ul>${p.notes.map(n=>`<li>${esc(n)}</li>`).join('')}</ul>`:'<p>Event labels distinguish earlier compilations from records checked in the recent research.</p>'}<div class="source-list">${ids.map(sourceLink).join('')}</div></section>${path.length>1?`<section class="evidence-notes"><h3>${p.tentative?'Proposed line':'Line'} to Margot</h3><p>Follow each generation; qualifications are shown on the parent links.</p><div class="source-list">${path.map((id,i)=>`<button class="relative-button" type="button" data-select-person="${id}">${i?'↓ ':''}${esc(people[id].name)}</button>`).join('')}</div></section>`:''}`;
  }
  function renderPlace(id) {
    activePlace = id;
    $('#place-tabs').innerHTML = placeIds.map(k=>`<button type="button" class="place-tab" data-select-place="${k}" aria-pressed="${k===id}">${esc(places[k].name)}</button>`).join('');
    if (!id) {
      $('#place-detail').innerHTML = '<p class="eyebrow">The record is incomplete</p><h2>Place not established</h2><p class="place-context">No individual location has been established for this person. A relative’s home is not used as a substitute.</p>';
      return;
    }
    const p = places[id];
    const others = Object.values(people).filter(q=>q.id!==activeId&&q.events.some(e=>e.place===id));
    $('#place-detail').innerHTML = `<p class="eyebrow">The place around the person</p><h2>${esc(p.name)}</h2><p class="place-region">${esc(p.region)}</p>${p.population?`<div class="place-stats"><div><strong>${esc(p.population.total)}</strong><span>Residents · ${esc(p.population.year)}</span></div><div><strong>${esc(p.population.jewish)}</strong><span>Jewish residents · ${esc(p.population.year)}</span></div></div>`:''}<p class="place-context">${esc(p.context)}</p>${p.story?`<a class="story-link" href="index.html#${p.story}">Read this chapter in the story <span>↗</span></a>`:''}<div class="source-list">${p.sources.map(sourceLink).join('')}</div>${others.length?`<div class="place-related"><p>Also connected to ${esc(p.name)}</p><div class="place-related-links">${others.slice(0,8).map(q=>`<button type="button" data-select-person="${q.id}" data-keep-place="${id}">${esc(q.name)}</button>`).join('')}</div>${others.length>8?`<button type="button" data-search-place="${id}" style="margin-top:8px">See all ${others.length+1} people here →</button>`:''}</div>`:''}`;
  }
  function selectPlace(id, eventIndex = people[activeId].events.findIndex(e => e.place === id)) {
    if (!placeIds.includes(id)) return;
    activeEvent = eventIndex;
    renderPlace(id);
    renderEvents(people[activeId]);
    updateHash();
  }
  function renderPlaces(person, requestedPlace) {
    placeIds = [...new Set(person.events.map(event => event.place).filter(id => places[id]))];
    $('#place-count').textContent = `${placeIds.length} recorded place${placeIds.length === 1 ? '' : 's'}`;
    const place = placeIds.includes(requestedPlace) ? requestedPlace : (placeIds[0] || null);
    activeEvent = place ? person.events.findIndex(event => event.place === place) : -1;
    renderPlace(place);
  }
  function selectPerson(id,{place=null,push=true,clearFilter=false}={}) {
    if(!people[id])return;
    activeId=id;
    if(clearFilter){$('#person-search').value='';$('#branch-filter').value='all';}
    const p=people[id];
    $('#person-header').innerHTML=`<p class="profile-kicker">${esc(p.branch==='both'?'Bachrach & Baum':p.branch==='bachrach'?'The Bachrach branch':'The Baum branch')}</p>${p.tentative?'<span class="tentative-badge">Tentative ancestry</span>':''}<h2>${esc(p.name)}</h2><p class="profile-dates">${esc(p.lifespan)}</p><p class="profile-relation">${esc(relation(p))}</p>${p.story?`<a class="story-link" href="index.html#${p.story}">Their story <span aria-hidden="true">↗</span></a>`:''}`;
    $('#profile').setAttribute('aria-label',`Profile of ${p.name}`);
    renderConnections(p);renderPlaces(p,place);renderEvents(p);renderEvidence(p);renderList();
    $('#profile').scrollTop=0;
    document.title=`${p.name} · Family & Places`;
    window.familyPedigree?.select(id);
    if(push)updateHash();
  }
  document.addEventListener('click',event=>{
    const person=event.target.closest('[data-select-person]');
    if(person){selectPerson(person.dataset.selectPerson,{place:person.dataset.keepPlace||null,clearFilter:!person.dataset.listPerson});if($('#person-picker').open)$('#person-picker').close();return;}
    const place=event.target.closest('[data-select-place]');
    if(place){selectPlace(place.dataset.selectPlace);return;}
    const life=event.target.closest('[data-event]');
    if(life && !life.disabled){const i=Number(life.dataset.event);selectPlace(people[activeId].events[i].place,i);return;}
    const search=event.target.closest('[data-search-place]');
    if(search){$('#person-search').value=places[search.dataset.searchPlace].name;$('#branch-filter').value='all';renderList();$('#person-picker').showModal();$('#person-search').focus();}
  });
  $('#find-person').addEventListener('click',()=>{$('#person-picker').showModal();$('#person-search').focus();});
  $('#close-picker').addEventListener('click',()=>$('#person-picker').close());
  $('#person-picker').addEventListener('click',event=>{if(event.target===$('#person-picker')){const box=event.target.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)event.target.close();}});
  $('#person-search').addEventListener('input',renderList);
  $('#branch-filter').addEventListener('change',renderList);
  $('#reset-person').addEventListener('click',()=>selectPerson('1',{clearFilter:true}));
  window.addEventListener('popstate',()=>{const h=new URLSearchParams(location.hash.slice(1));selectPerson(people[h.get('person')]?h.get('person'):'1',{place:h.get('place'),push:false});});
  selectPerson(activeId,{place:state.get('place'),push:false});
})();
