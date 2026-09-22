(() => {
  'use strict';

  const root = document.documentElement;
  root.classList.add('js');

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  const header = document.querySelector('[data-header]');
  const updateHeader = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const billingToggle = document.querySelector('[data-billing-toggle]');
  const priceCards = [...document.querySelectorAll('[data-price-card]')];

  const formatPrice = (price) => {
    const rounded = Number.isInteger(price) ? String(price) : price.toFixed(2);
    return rounded;
  };

  const updateBilling = (isAnnual) => {
    if (!billingToggle) return;
    billingToggle.setAttribute('aria-checked', String(isAnnual));
    billingToggle.setAttribute('aria-label', isAnnual ? 'Switch to monthly billing' : 'Switch to annual billing');

    priceCards.forEach((card) => {
      const monthly = Number(card.dataset.monthly);
      const price = isAnnual ? monthly * 0.8 : monthly;
      const priceOutput = card.querySelector('[data-price]');
      const note = card.querySelector('[data-billing-note]');
      if (priceOutput) priceOutput.textContent = formatPrice(price);
      if (note) note.textContent = isAnnual ? 'Per month, billed annually' : 'Billed monthly';
    });
  };

  if (billingToggle) {
    billingToggle.addEventListener('click', () => {
      updateBilling(billingToggle.getAttribute('aria-checked') !== 'true');
    });
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -28px' }
    );
    revealItems.forEach((item) => revealObserver.observe(item));
  }
})();
