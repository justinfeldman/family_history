document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Lightbox Logic
    // Elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close');

    // Create Magnifier Element
    const magnifier = document.createElement('div');
    magnifier.classList.add('magnifier');
    lightbox.appendChild(magnifier);

    // Zoom Configuration
    const ZOOM_LEVEL = 2.5;

    // Open Lightbox
    window.openLightbox = function (e) {
        if (e.target.tagName === 'IMG' || e.target.tagName === 'SVG') {
            const img = e.target;
            lightboxImg.src = img.src;

            // Toggle Genogram Mode
            if (img.src.includes('genogram.svg')) {
                lightbox.classList.add('genogram-mode');
                magnifier.style.display = 'none'; // Disable zoom for genogram
            } else {
                lightbox.classList.remove('genogram-mode');
            }

            // Get caption text from the next sibling or data attribute
            let captionText = '';
            // Try to find a caption container
            const captionContainer = img.closest('.image-item')?.querySelector('.image-caption');
            if (captionContainer) {
                // Clone the caption to preserve HTML (like bold tags) but remove button
                const captionClone = captionContainer.cloneNode(true);
                const btn = captionClone.querySelector('.translation-toggle');
                if (btn) btn.remove();

                // Also look for translation
                const translationDiv = img.closest('.image-item')?.querySelector('.translation-text');
                if (translationDiv && translationDiv.style.display === 'block') {
                    captionText = captionClone.innerHTML + '<br><br><div class="lightbox-translation">' + translationDiv.innerHTML + '</div>';
                } else {
                    captionText = captionClone.innerHTML;
                }
            } else if (img.nextElementSibling && img.nextElementSibling.classList.contains('image-caption')) {
                captionText = img.nextElementSibling.innerHTML;
            } else {
                captionText = img.alt;
            }

            lightboxCaption.innerHTML = captionText;
            lightbox.classList.add('visible');
            document.body.style.overflow = 'hidden'; // Prevent scrolling background
        }
    };

    if (lightbox) {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('scroll-image')) {
                window.openLightbox(e);
            }
        });

        // Magnifier Logic
        lightboxImg.addEventListener('mousemove', function (e) {
            // Only activate if image is safe to zoom (not genogram) and loaded
            if (lightbox.classList.contains('genogram-mode')) return;

            const { left, top, width, height } = lightboxImg.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;

            // Check if cursor is inside the image
            if (x < 0 || y < 0 || x > width || y > height) {
                magnifier.style.display = 'none';
                lightboxImg.style.cursor = 'default';
                return;
            }

            // Calculate resolution ratio
            // We assume the natural image is larger than the displayed image
            if (lightboxImg.naturalWidth <= width * 1.1) {
                // If image is small or substantially same size, don't zoom
                lightboxImg.style.cursor = 'default';
                magnifier.style.display = 'none';
                return;
            }

            lightboxImg.style.cursor = 'none'; // Hide cursor when magnifying
            magnifier.style.display = 'block';

            // Move magnifier
            const magWidth = magnifier.offsetWidth / 2;
            const magHeight = magnifier.offsetHeight / 2;

            magnifier.style.left = `${e.clientX - magWidth}px`;
            magnifier.style.top = `${e.clientY - magHeight}px`;

            // Calculate background position
            // The background image of the magnifier is the image itself
            magnifier.style.backgroundImage = `url('${lightboxImg.src}')`;

            const bgX = (x / width) * 100;
            const bgY = (y / height) * 100;

            magnifier.style.backgroundPosition = `${bgX}% ${bgY}%`;

            // Calculate background size based on zoom level
            // We want the magnifier to show a zoomed in view relative to the *natural* size if possible,
            // or just scale up the current view.
            // A simple approach is: Background Size = (Image Width * Zoom)
            magnifier.style.backgroundSize = `${width * ZOOM_LEVEL}px ${height * ZOOM_LEVEL}px`;

        });

        lightboxImg.addEventListener('mouseleave', function () {
            magnifier.style.display = 'none';
            lightboxImg.style.cursor = 'default';
        });

        // Translation Toggle Logic (Delegated)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('translation-toggle')) {
                const transId = e.target.dataset.translationId;
                if (transId) {
                    const content = document.getElementById(transId);
                    if (content) {
                        content.classList.toggle('hidden');
                    }
                }
            }
        });

        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('visible');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('visible');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('visible')) {
                lightbox.classList.remove('visible');
            }
        });
    }

    if (window.contentData) {
        renderContent(window.contentData);
        initScrollytelling();
    } else {
        console.error("contentData not found. Ensure data.js is loaded.");
    }
    initScrollytelling();

    function renderContent(data) {
        data.sections.forEach((section, sIdx) => {
            const chapterEl = document.createElement('section');
            chapterEl.classList.add('chapter');
            chapterEl.id = `chapter-${sIdx}`;
            if (section.year) {
                chapterEl.dataset.year = section.year;
            }

            const contentWrapper = document.createElement('div');
            contentWrapper.classList.add('chapter-content');

            // Visual Column
            const visualCol = document.createElement('div');
            visualCol.classList.add('visual-col');
            const visualContainer = document.createElement('div');
            visualContainer.classList.add('visual-container');
            visualCol.appendChild(visualContainer);

            // Text Column
            const textCol = document.createElement('div');
            textCol.classList.add('text-col');

            // Title
            const titleEl = document.createElement('h2');
            titleEl.innerText = section.title;
            textCol.appendChild(titleEl);

            let currentImageId = null;

            section.content.forEach((item, iIdx) => {
                if (item.type === 'image_placeholder' && item.image_files && item.image_files.length > 0) {
                    const imgId = `img-${sIdx}-${iIdx}`;
                    currentImageId = imgId;

                    item.image_files.forEach((src, fileIdx) => {
                        const specificId = `${imgId}-${fileIdx}`;
                        const img = document.createElement('img');
                        img.src = src;
                        img.id = specificId;
                        img.classList.add('scroll-image');
                        img.dataset.groupId = imgId;

                        if (item.captions && item.captions[fileIdx]) {
                            let captionHtml = `<strong>${item.captions[fileIdx]}</strong>`;
                            if (item.translations && item.translations[fileIdx]) {
                                const transId = `trans-${specificId}`;
                                captionHtml += `
                                    <br>
                                    <button class="translation-toggle" data-translation-id="${transId}">Read Translation</button>
                                    <div id="${transId}" class="translation-content hidden">
                                        <em>${item.translations[fileIdx]}</em>
                                    </div>
                                `;
                            }
                            const capDiv = document.createElement('div');
                            capDiv.classList.add('caption-overlay');
                            capDiv.innerHTML = captionHtml;
                            capDiv.dataset.forImage = specificId;
                            visualContainer.appendChild(img);
                            visualContainer.appendChild(capDiv);
                        } else {
                            visualContainer.appendChild(img);
                        }
                    });
                } else if (item.type === 'text') {
                    const p = document.createElement('p');
                    p.innerHTML = item.text;
                    p.classList.add('step');
                    if (currentImageId) {
                        p.dataset.triggerImage = currentImageId;
                    }
                    textCol.appendChild(p);
                }
            });

            contentWrapper.appendChild(visualCol);
            contentWrapper.appendChild(textCol);
            chapterEl.appendChild(contentWrapper);
            app.appendChild(chapterEl);
        });

        // Initialize Timeline
        initTimeline(data.sections);
    }

    function initTimeline(sections) {
        const timeline = document.getElementById('timeline');
        if (!timeline) return;

        timeline.innerHTML = ''; // Clear existing
        const uniqueYears = [...new Set(sections.map(s => s.year).filter(y => y))];

        uniqueYears.forEach(year => {
            const div = document.createElement('div');
            div.classList.add('timeline-year');
            div.innerText = year;
            div.dataset.year = year;
            div.addEventListener('click', () => {
                const targetSection = document.querySelector(`section[data-year="${year}"]`);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
            timeline.appendChild(div);
        });
    }

    function initScrollytelling() {
        // We use a library-free approach: IntersectionObserver
        const steps = document.querySelectorAll('.step');
        const chapters = document.querySelectorAll('.chapter');
        const timelineYears = document.querySelectorAll('.timeline-year');

        // Observer for Steps (Image switching)
        const stepObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.step.active').forEach(el => el.classList.remove('active'));
                    entry.target.classList.add('active');
                    const imgGroupId = entry.target.dataset.triggerImage;
                    if (imgGroupId) {
                        const section = entry.target.closest('section');
                        if (!section) return;
                        section.querySelectorAll('.scroll-image, .caption-overlay').forEach(el => el.classList.remove('active'));
                        section.querySelectorAll(`[id^="${imgGroupId}-"], [data-for-image^="${imgGroupId}-"]`).forEach(el => el.classList.add('active'));
                    }
                }
            });
        }, {
            root: null,
            threshold: 0.5,
            rootMargin: "0px"
        });

        steps.forEach(step => stepObserver.observe(step));

        // Observer for Chapters (Timeline update)
        const chapterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const year = entry.target.dataset.year;
                    if (year) {
                        timelineYears.forEach(el => {
                            el.classList.toggle('active', el.dataset.year === year);
                        });
                    }
                }
            });
        }, {
            root: null,
            threshold: 0.2, // Trigger when 20% of the chapter is visible
            rootMargin: "-40% 0px -40% 0px" // Trigger in the middle of the viewport
        });

        chapters.forEach(chapter => chapterObserver.observe(chapter));
    }
});
