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

// Why Lebanon — hex hover/tap controller (glass markers)
(function () {
  const hexes = document.querySelectorAll('.why-hex');
  if (!hexes.length) return;
  const hideTimers = new WeakMap();
  const prefersTap = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 900;

  const clearAll = () => {
    hexes.forEach(hex => {
      const tip = hex.querySelector('.hex-tooltip');
      const timer = hideTimers.get(hex);
      if (timer) { clearTimeout(timer); hideTimers.delete(hex); }
      hex.classList.remove('is-active');
      if (tip) tip.classList.remove('is-visible');
    });
  };

  hexes.forEach(hex => {
    const tip = hex.querySelector('.hex-tooltip');
    const side = hex.dataset.side;
    if (tip && !tip.classList.contains('hex-tooltip-left') && !tip.classList.contains('hex-tooltip-right')) {
      tip.classList.add(side === 'right' ? 'hex-tooltip-right' : 'hex-tooltip-left');
    }

    if (prefersTap) {
      // Tap (or keyboard on a narrow viewport) toggles the tooltip.
      const toggle = (e) => {
        const wasActive = hex.classList.contains('is-active');
        clearAll();
        if (!wasActive) {
          hex.classList.add('is-active');
          if (tip) tip.classList.add('is-visible');
        }
        e.stopPropagation();
      };
      hex.addEventListener('click', toggle);
      hex.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(e); }
      });
      return;
    }

    // Desktop: hover and keyboard focus reveal the tooltip.
    const activate = () => {
      const timer = hideTimers.get(hex);
      if (timer) { clearTimeout(timer); hideTimers.delete(hex); }
      hex.classList.add('is-active');
      if (tip) tip.classList.add('is-visible');
    };
    const deactivate = () => {
      const timer = setTimeout(() => {
        hex.classList.remove('is-active');
        if (tip) tip.classList.remove('is-visible');
        hideTimers.delete(hex);
      }, 120);
      hideTimers.set(hex, timer);
    };

    hex.addEventListener('mouseenter', activate);
    hex.addEventListener('mouseleave', deactivate);
    hex.addEventListener('focus', activate);
    hex.addEventListener('blur', deactivate);
  });

  if (prefersTap) {
    document.addEventListener('click', (e) => {
      if (![...hexes].some(h => h.contains(e.target))) clearAll();
    });
  }
})();
