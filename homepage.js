// Worktales homepage interactions

// Header shadow on scroll
const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > 24) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Services dropdown — click on mobile, hover/focus on desktop (CSS handles those)
const dd = document.getElementById('servicesDd');
const ddTrigger = dd.querySelector('.nav-link');
ddTrigger.addEventListener('click', (e) => {
  if (window.matchMedia('(max-width: 980px)').matches) {
    e.preventDefault();
    const open = dd.classList.toggle('open');
    ddTrigger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
});

// Close mobile menu on link tap inside dropdown
dd.querySelectorAll('.dropdown-item').forEach(a => {
  a.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 980px)').matches) {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      dd.classList.remove('open');
    }
  });
});

