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
