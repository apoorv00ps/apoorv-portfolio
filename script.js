const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const contactForm = document.querySelector('#contact-form');
const statusMessage = document.querySelector('#form-status');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('nav-open');
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:apoorv.00ps@gmail.com?subject=${subject}&body=${body}`;
    statusMessage.textContent = 'Your mail client should open with a draft message. If it does not, send email to apoorv.00ps@gmail.com directly.';
    contactForm.reset();
  });
}

// --- PROJECT DATA ---
// Simply add, remove, or modify items in these lists to update the website automatically!
const projectData = {
  gameDevelopment: [
    { type: 'video', src: 'videos/gameclip-1.mp4', tag: 'Game Dev', title: 'Relaxed driving prototype', description: 'A soft driving experience built in Unity to test playful pacing, lighting, and natural movement.' },
    { type: 'video', src: 'videos/gameclip-2.mp4', tag: 'Game Dev', title: 'FPS shooter build', description: 'A Unity shooter prototype with responsive controls and a compact test arena.' },
    { type: 'video', src: 'videos/gameclip-3.mp4', tag: 'Game Dev', title: 'Zombie Shooter', description: 'A Unity zombie shooter project i created long time ago.' },
    { type: 'image', src: 'Images/game-3.png', tag: 'Game Dev', title: 'Nature terrain demo', description: 'A small open world scene built to explore terrain, foliage, and camera flow.' }
  ],
  threeDAnimation: [
    { type: 'video', src: 'videos/3danimation1.mp4', tag: '3D Animation', title: 'Peace Island Animation', description: 'A low poly bright textured animation of an isolated farm house.' },
    { type: 'video', src: 'videos/3danimation2.mp4', tag: '3D Animation', title: 'Real Estate Project Animation', description: 'Animation of a project of a real estate company. Made in blender.' }

  ],
  threeDModels: [
    { type: 'image', src: 'Images/3d--2.jpg', tag: '3D Model', title: 'The FarmHouse', description: 'This is a low poly farm house i created for myself as a personal project.' },
    { type: 'image', src: 'Images/3d--1.jpg', tag: '3D Model', title: 'The FarmHouse', description: 'I rendered it in different lightning to show day and night' },
    { type: 'image', src: 'Images/3d-1.jpeg', tag: '3D Model', title: 'The Island', description: 'This is the low poly model i created as a island map for my fps shooter zombie game.' },
    { type: 'image', src: 'Images/3d-2.jpeg', tag: '3D Model', title: 'Another view of island.', description: 'This is the low poly model i created as a island map for my fps shooter zombie game.' },
    { type: 'image', src: 'Images/3d-3.jpeg', tag: '3D Model', title: 'A Cafe.', description: 'Always wanted a minimal cafe to run at peace, so made one in 3d.' },
    { type: 'image', src: 'Images/3d-4.png', tag: '3D Model', title: 'A Modern city building.', description: 'Made this realistic building for a modern city map required for a game that i quit.' },
    { type: 'image', src: 'Images/3d-5.jpeg', tag: '3D Model', title: 'Dodge Challenger hellcat', description: 'Made my dream car in low poly 3d.' },
    { type: 'image', src: 'Images/3d-6.png', tag: '3D Model', title: 'Neon city building', description: 'Made this too.' },
    { type: 'image', src: 'Images/3d-7.png', tag: '3D Model', title: 'Neon city building', description: 'Made this too.' },
    { type: 'image', src: 'Images/3d-8.png', tag: '3D Model', title: 'Neon city building', description: 'Made this too.' },
    { type: 'image', src: 'Images/3d-9.png', tag: '3D Model', title: 'Neon city building', description: 'Made this too.' },
    { type: 'image', src: 'Images/3d-10.jpeg', tag: '3D Model', title: 'Astranaut', description: 'Wanted to be an astranaut, so made one in 3d.' },
    { type: 'image', src: 'Images/3d-11.png', tag: '3D Model', title: 'Foggy shed in woods.', description: 'Wanted to make a \'FROM\' show inspired game, so made this foggy map world for it.' }
  ]
};

function createProjectCard(project) {
  const mediaHtml = project.type === 'video'
    ? `<video src="${project.src}" autoplay muted loop playsinline></video>`
    : `<img src="${project.src}">`;

  return `
    <article class="project-card">
      <div class="project-thumb">
        <div class="project-thumb-text">${mediaHtml}</div>
      </div>
      <span class="project-tag">${project.tag}</span>
      <h4>${project.title}</h4>
      <p>${project.description}</p>
      <div class="project-actions">
        <a class="project-action" href="mailto:apoorv.00ps@gmail.com?subject=Project%20Update">Contact to update</a>
      </div>
    </article>
  `;
}

function renderProjects() {
  const gameContainer = document.getElementById('game-projects-container');
  const animationContainer = document.getElementById('animation-projects-container');
  const modelsContainer = document.getElementById('models-projects-container');

  if (gameContainer) gameContainer.innerHTML = projectData.gameDevelopment.map(createProjectCard).join('');
  if (animationContainer) animationContainer.innerHTML = projectData.threeDAnimation.map(createProjectCard).join('');
  if (modelsContainer) modelsContainer.innerHTML = projectData.threeDModels.map(createProjectCard).join('');
}

// Render the projects before any other DOM logic that relies on them
renderProjects();

// Setup 3D collage with overlap and auto-scrolling seamless loop
const collageRow = document.querySelector('.project-row.project-collage');
if (collageRow) {
  const cards = Array.from(collageRow.children);

  // Set z-index variables for original cards
  cards.forEach((card, index) => {
    card.style.setProperty('--index', index);
  });

  // Clone all cards for a perfect seamless infinite scroll loop
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    // Maintain z-index for clones to keep overlapping correct
    const newIndex = cards.length + parseInt(card.style.getPropertyValue('--index'));
    clone.style.setProperty('--index', newIndex);
    collageRow.appendChild(clone);
  });
}

const scrollElements = document.querySelectorAll('.animate-on-scroll, .project-card');

if (scrollElements.length) {
  const scrollObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  scrollElements.forEach((element) => scrollObserver.observe(element));
}

// Dynamically flood the background with 30 scattered images
const images = ['Images/gamebg-1.png', 'Images/gamebg-2.png', 'Images/gamebg-3.png'];

// To ensure they cover the full scroll length, we calculate a large pixel height.
// We'll update this on resize/load just in case, or we can use percentages if body stretches.
// Actually, using viewport relative percentages mixed with body length is tricky if body isn't position relative.
// Let's ensure document.body is relative (done in CSS/by default if body contains them).
// Instead of absolute pixels, let's use percentage of total height!
// E.g. top: random between 0% and 90% of the body's scrollHeight
// Because percentage 'top' on an absolute element refers to its containing block.
for (let i = 0; i < 70; i++) {
  const imgIndex = i % 3;
  const el = document.createElement('div');
  el.className = 'ambient-layer-dynamic';
  el.style.backgroundImage = `url('${images[imgIndex]}')`;

  // Randomize size between 20vw and 50vw
  const size = 20 + Math.random() * 30;
  el.style.width = `${size}vw`;
  el.style.height = `${size}vw`;

  // Randomize vertical position (0% to 100%)
  const top = Math.random() * 95;

  // Randomize horizontal position (-10% to 90%)
  const left = -10 + Math.random() * 100;

  el.style.top = `${top}%`;
  el.style.left = `${left}%`;

  // Randomize animation delays and durations
  const delay = Math.random() * -40;
  const duration = 20 + Math.random() * 15;
  el.style.animationDelay = `${delay}s`;
  el.style.animationDuration = `${duration}s`;

  document.body.appendChild(el);
}
