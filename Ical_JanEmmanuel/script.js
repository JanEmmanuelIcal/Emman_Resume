// Animate header and nav on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('header').classList.add('animate-header');
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.classList.add('animate-nav');
  });
  document.querySelectorAll('.card').forEach((card, i) => {
    setTimeout(() => card.classList.add('slide-up'), 300 + i * 200);
  });
  document.querySelector('.header-pic').classList.add('pulse-shadow');
});

// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
    // Ripple effect
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});