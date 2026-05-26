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

// Dropdowns — click on mobile, hover/focus on desktop (CSS handles those)
const dropdowns = document.querySelectorAll('.nav-menu .has-dropdown');
const closeMobileMenu = () => {
  navMenu.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  dropdowns.forEach(dd => {
    dd.classList.remove('open');
    dd.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false');
  });
};

dropdowns.forEach(dd => {
  const trigger = dd.querySelector('.nav-link');
  if (!trigger) return;

  trigger.addEventListener('click', (e) => {
    if (!window.matchMedia('(max-width: 980px)').matches) return;
    e.preventDefault();
    const willOpen = !dd.classList.contains('open');
    // collapse siblings so the stack stays clean
    dropdowns.forEach(other => {
      if (other !== dd) {
        other.classList.remove('open');
        other.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false');
      }
    });
    dd.classList.toggle('open', willOpen);
    trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
  });

  dd.querySelectorAll('.dropdown-item').forEach(a => {
    a.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 980px)').matches) closeMobileMenu();
    });
  });
});

// Close mobile menu on tap of plain nav links (Insights, About, etc.)
navMenu.querySelectorAll('a.nav-link').forEach(a => {
  a.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 980px)').matches) closeMobileMenu();
  });
});

