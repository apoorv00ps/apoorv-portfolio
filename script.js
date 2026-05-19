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
