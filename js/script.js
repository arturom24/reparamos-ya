let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}

document.addEventListener('DOMContentLoaded', () => {
  const serviceCards = document.querySelectorAll('.servicios .card');

  if (!serviceCards.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px'
  });

  serviceCards.forEach(card => observer.observe(card));
});

