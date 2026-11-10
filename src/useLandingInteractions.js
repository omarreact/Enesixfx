import { useEffect } from 'react';
import previews from './page-previews.json';

const setExpanded = (element, expanded) => element.setAttribute('aria-expanded', String(expanded));
const setPressed = (element, pressed) => element.setAttribute('aria-pressed', String(pressed));

const localAnswers = {
  'What are my biggest weaknesses?': 'Sample review: compare your losing trades with your trading plan and identify the setups you entered without confirmation.',
  'Which asset should I focus on?': 'Sample review: compare your win rate and average loss by market, then review the instrument with the most consistent results.',
  'Am I overtrading?': 'Sample review: group trades by session and compare your results before and after your planned trade limit.',
};

export function useLandingInteractions(scope, showPreview) {
  useEffect(() => {
    const root = scope.current;
    const get = (selector) => root.querySelector(selector);
    const all = (selector) => [...root.querySelectorAll(selector)];
    const header = get('.site-header');
    const panel = get('.site-nav__panel');
    const mobileMenu = get('.mobile-menu');
    const hamburger = get('.hamburger');
    const navButtons = all('.site-nav__trigger');
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const cleanups = [];
    let activeTrigger = null;
    let motionFrame = 0;
    let scrollFrame = 0;
    let socialTimer = 0;

    function showNavigation(trigger) {
      activeTrigger = trigger;
      const groupId = trigger?.closest('[data-nav-item]').dataset.navItem;
      for (const button of navButtons) {
        const active = button === trigger;
        setExpanded(button, active);
        button.parentElement.classList.toggle('is-open', active);
      }
      for (const group of all('.site-nav__group')) {
        const active = group.dataset.group === groupId;
        group.classList.toggle('is-active', active);
        group.inert = !active;
      }
      panel.classList.toggle('is-open', Boolean(trigger));
      panel.inert = !trigger;
      panel.setAttribute('aria-hidden', String(!trigger));
      header.classList.toggle('is-peek', Boolean(trigger));
      if (!trigger) return;
      const box = trigger.getBoundingClientRect();
      const width = get('.site-nav__group.is-active').offsetWidth;
      const left = Math.max(8, Math.min(box.left, window.innerWidth - width - 8));
      panel.style.transform = `translate(${left}px, ${box.bottom}px)`;
    }

    function showMobile(open, restoreFocus = false) {
      mobileMenu.classList.toggle('is-open', open);
      mobileMenu.inert = !open;
      mobileMenu.setAttribute('aria-hidden', String(!open));
      setExpanded(hamburger, open);
      document.body.classList.toggle('menu-visible', open);
      if (open) get('.mobile-menu__close').focus();
      else if (restoreFocus) hamburger.focus();
    }

    function showLocale(menu) {
      for (const container of all('.locale-menu')) {
        const open = menu === container && !container.classList.contains('is-open');
        container.classList.toggle('is-open', open);
        container.querySelector('ul').hidden = !open;
        setExpanded(container.firstElementChild, open);
      }
    }

    function selectSocial(index) {
      for (const feature of all('[data-social-feature]')) setPressed(feature, feature.dataset.socialFeature === index);
      for (const image of all('[data-social-image]')) image.setAttribute('aria-hidden', String(image.dataset.socialImage !== index));
    }

    function selectTier(tier) {
      for (const row of all('.tier-row')) {
        row.classList.toggle('tier-row--active', row === tier);
        setPressed(row, row === tier);
      }
    }

    function coachAction(control) {
      const mockup = get('.ai-coach__mockup');
      const title = get('.ai-coach__mockup-empty-heading');
      const description = get('.ai-coach__mockup-empty-sub');
      const label = control.getAttribute('aria-label') || control.textContent.trim();
      if (control.matches('.ai-coach__mockup-tab')) {
        for (const tab of all('.ai-coach__mockup-tab')) {
          tab.classList.toggle('ai-coach__mockup-tab--on', tab === control);
          setPressed(tab, tab === control);
        }
        get('.ai-coach__mockup-chatitem').textContent = {
          Chats: 'Which asset should I focus on?', Trades: 'Sample trade review', Strategies: 'Sample trading plan',
        }[label];
      } else if (localAnswers[label]) {
        title.textContent = label;
        description.textContent = localAnswers[label];
      } else if (label === 'New chat') {
        title.textContent = 'Ask me anything about your trades';
        description.textContent = 'I can only see your trading data — nothing else.';
      } else if (label === 'Library') {
        const visible = mockup.classList.toggle('show-library');
        setPressed(control, visible);
      } else if (label === 'Expand') {
        const expanded = mockup.classList.toggle('is-expanded');
        mockup.classList.remove('is-minimized');
        setPressed(control, expanded);
        setPressed(mockup.querySelector('[aria-label="Minimize"]'), false);
      } else if (label === 'Minimize') {
        const minimized = mockup.classList.toggle('is-minimized');
        mockup.classList.remove('is-expanded');
        setPressed(control, minimized);
        setPressed(mockup.querySelector('[aria-label="Expand"]'), false);
      }
    }

    function openPreview(control, content) {
      const previous = panel.contains(control) ? activeTrigger : null;
      showNavigation(null);
      previous?.focus();
      showLocale(null);
      if (mobileMenu.contains(control)) showMobile(false, true);
      showPreview(content);
    }

    function handleClick(event) {
      const target = event.target.closest('a, button, [role="button"]');
      if (!target) return;
      if (target.matches('.site-nav__trigger')) {
        showLocale(null);
        showNavigation(activeTrigger === target ? null : target);
      } else if (target.matches('.hamburger')) {
        showMobile(true);
      } else if (target.matches('[data-mobile-close]')) {
        showMobile(false, true);
      } else if (target.matches('.mobile-menu__trigger')) {
        const item = target.closest('[data-mobile-nav]');
        const open = item.classList.toggle('is-open');
        setExpanded(target, open);
        item.querySelector('.mobile-menu__submenu').inert = !open;
      } else if (target.matches('.locale-pill, .mobile-menu__locale')) {
        showNavigation(null);
        showLocale(target.closest('.locale-menu'));
      } else if (target.matches('[data-language]')) {
        if (target.dataset.language === 'en') showLocale(null);
        else openPreview(target, { title: target.textContent.trim(), paragraphs: ['This local landing page is available in English.'] });
      } else if (target.matches('[data-preview], .header-help')) {
        event.preventDefault();
        openPreview(target, previews[target.dataset.preview || 'faq']);
      } else if (target.matches('[data-demo]')) {
        event.preventDefault();
        openPreview(target, {
          title: target.dataset.demo,
          paragraphs: [target.dataset.demo === 'Coming Soon'
            ? 'This feature is marked Coming Soon.'
            : 'This is a frontend demo. Account access, registration, funding, and trading are disabled.'],
        });
      } else if (target.matches('[data-social-feature]')) {
        selectSocial(target.dataset.socialFeature);
      } else if (target.matches('.tier-row')) {
        selectTier(target);
      } else if (target.matches('.ai-coach__mockup button')) {
        coachAction(target);
      } else if (target.matches('a[href^="#"]')) {
        showNavigation(null);
        showLocale(null);
        if (mobileMenu.contains(target)) showMobile(false);
      }
    }

    function handleKeys(event) {
      if (event.key === 'Escape') {
        const previous = activeTrigger;
        showNavigation(null);
        showLocale(null);
        if (!mobileMenu.inert) showMobile(false, true);
        else previous?.focus();
      }
      if ((event.key === ' ' || event.key === 'Enter') && event.target.matches('li[role="button"]')) {
        event.preventDefault();
        event.target.click();
      }
      if (event.key === 'ArrowDown' && event.target.matches('.site-nav__trigger')) {
        event.preventDefault();
        showNavigation(event.target);
        get('.site-nav__group.is-active a').focus();
      }
      if (event.key === 'Tab' && !mobileMenu.inert) {
        const controls = all('.mobile-menu__panel :is(button, a)').filter((element) => !element.closest('[inert], [hidden]'));
        const boundary = event.shiftKey ? controls[0] : controls.at(-1);
        if (event.target === boundary) {
          event.preventDefault();
          (event.shiftKey ? controls.at(-1) : controls[0]).focus();
        }
      }
    }

    function outsideMenus(event) {
      if (!event.target.closest('.site-nav, .site-nav__panel')) showNavigation(null);
      if (!event.target.closest('.locale-menu')) showLocale(null);
    }

    for (const carousel of all('.splide')) {
      const track = carousel.querySelector('.splide__track');
      const slides = [...track.querySelectorAll('.splide__slide')];
      const bar = carousel.querySelector('.carousel-progress__bar');
      const controls = document.createElement('div');
      controls.className = 'landing-carousel-controls';
      controls.setAttribute('role', 'group');
      controls.setAttribute('aria-label', 'Carousel navigation');
      const pagination = document.createElement('div');
      pagination.className = 'landing-carousel-dots';

      const makeButton = (label, className) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = className;
        button.setAttribute('aria-label', label);
        button.setAttribute('aria-controls', track.id);
        return button;
      };
      const previous = makeButton('Previous slide', 'landing-carousel-arrow landing-carousel-arrow--previous');
      const next = makeButton('Next slide', 'landing-carousel-arrow');
      const dots = slides.map((_, index) => makeButton(`Show slide ${index + 1}`, 'landing-carousel-dot'));
      pagination.append(...dots);
      controls.append(previous, pagination, next);
      carousel.append(controls);

      const scrollTo = (left) => track.scrollTo({ left, behavior: motion.matches ? 'instant' : 'smooth' });
      const position = (slide) => Math.min(slide.offsetLeft - slides[0].offsetLeft, track.scrollWidth - track.clientWidth);
      const stops = () => [...new Set(slides.map(position))];
      const nearestStop = (positions) => positions.reduce((best, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(positions[best] - track.scrollLeft) ? index : best, 0);

      function step(direction) {
        const positions = stops();
        const left = positions[nearestStop(positions) + direction];
        if (left !== undefined) scrollTo(left);
      }

      function updateCarousel() {
        const offsets = slides.map(position);
        const positions = [...new Set(offsets)];
        const current = nearestStop(positions);
        controls.hidden = positions.length < 2;
        previous.setAttribute('aria-disabled', String(current === 0));
        next.setAttribute('aria-disabled', String(current === positions.length - 1));
        dots.forEach((button, index) => {
          const left = offsets[index];
          button.hidden = index > 0 && left === offsets[index - 1];
          button.setAttribute('aria-current', String(!button.hidden && left === positions[current]));
        });
        if (bar) bar.style.width = `${100 * (current + 1) / positions.length}%`;
      }

      previous.addEventListener('click', () => step(-1));
      next.addEventListener('click', () => step(1));
      dots.forEach((button, index) => button.addEventListener('click', () => scrollTo(position(slides[index]))));
      track.addEventListener('scroll', updateCarousel, { passive: true });
      const resize = new ResizeObserver(updateCarousel);
      resize.observe(track);
      updateCarousel();

      let autoplay = 0;
      const startAutoplay = () => {
        if (motion.matches || autoplay) return;
        autoplay = window.setInterval(() => {
          const positions = stops();
          if (positions.length < 2) return;
          const nextIndex = (nearestStop(positions) + 1) % positions.length;
          scrollTo(positions[nextIndex]);
        }, 5200);
      };
      const stopAutoplay = () => {
        window.clearInterval(autoplay);
        autoplay = 0;
      };
      carousel.addEventListener('pointerenter', stopAutoplay);
      carousel.addEventListener('pointerleave', startAutoplay);
      carousel.addEventListener('focusin', stopAutoplay);
      carousel.addEventListener('focusout', startAutoplay);
      startAutoplay();
      cleanups.push(() => {
        stopAutoplay();
        resize.disconnect();
        track.removeEventListener('scroll', updateCarousel);
        carousel.removeEventListener('pointerenter', stopAutoplay);
        carousel.removeEventListener('pointerleave', startAutoplay);
        carousel.removeEventListener('focusin', stopAutoplay);
        carousel.removeEventListener('focusout', startAutoplay);
        controls.remove();
      });
    }

    const revealGroups = [
      '.section-intro > *',
      '.metric',
      '.gateway-card',
      '.liquidity-row',
      '.account-card',
      '.tier-row',
      '.challenge-head, .challenge-sub, .challenge-stats, .challenge-actions',
      '.step-item',
      '.genesis-social__media, .genesis-feature',
      '.ai-coach__mockup-wrap',
      '.broker-showcase, .broker-card',
      '.verified__media',
      '.glow-image',
      '.instance-box',
      '.site-footer__inner > *',
    ];
    const reveals = all(revealGroups.join(', '));
    const groupCounts = new Map();
    reveals.forEach((element) => {
      const group = element.parentElement;
      const index = groupCounts.get(group) || 0;
      groupCounts.set(group, index + 1);
      element.classList.add('motion-reveal');
      element.style.setProperty('--motion-delay', `${Math.min(index * 85, 510)}ms`);
    });
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('motion-in');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach((element) => {
      if (motion.matches) element.classList.add('motion-in');
      else observer.observe(element);
    });

    const stepObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const step of all('.step-item')) step.classList.toggle('is-motion-active', step === entry.target);
      }
    }, { threshold: 0.55, rootMargin: '-12% 0px -28% 0px' });
    all('.step-item').forEach((step) => stepObserver.observe(step));

    const socialFeatures = all('[data-social-feature]');
    let socialIndex = 0;
    const stopSocialMotion = () => {
      window.clearInterval(socialTimer);
      socialTimer = 0;
    };
    const startSocialMotion = () => {
      if (motion.matches || socialTimer || socialFeatures.length < 2) return;
      socialTimer = window.setInterval(() => {
        socialIndex = (socialIndex + 1) % socialFeatures.length;
        selectSocial(String(socialIndex));
      }, 4300);
    };
    const socialSection = get('#genesis-social-section');
    socialSection?.addEventListener('pointerenter', stopSocialMotion);
    socialSection?.addEventListener('pointerleave', startSocialMotion);
    socialSection?.addEventListener('focusin', stopSocialMotion);
    socialSection?.addEventListener('focusout', startSocialMotion);
    startSocialMotion();

    function updateMotion() {
      motionFrame = 0;
      const ratio = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 2.2);
      root.style.setProperty('--page-scroll', ratio.toFixed(3));
      root.style.setProperty('--hero-lift', `${Math.min(window.scrollY * -0.085, 0)}px`);
      root.style.setProperty('--glow-drift', `${Math.min(window.scrollY * 0.035, 34)}px`);
    }

    function queueScrollMotion() {
      if (motion.matches || motionFrame) return;
      motionFrame = requestAnimationFrame(updateMotion);
    }

    function pointerMotion(event) {
      if (motion.matches || scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        const x = event.clientX / Math.max(window.innerWidth, 1) - 0.5;
        const y = event.clientY / Math.max(window.innerHeight, 1) - 0.5;
        root.style.setProperty('--pointer-x', x.toFixed(3));
        root.style.setProperty('--pointer-y', y.toFixed(3));
        const glow = get('.site-nav__glow-follow');
        const nav = get('.site-nav');
        if (glow && nav) {
          const box = nav.getBoundingClientRect();
          glow.style.transform = `translate3d(${event.clientX - box.left}px, ${event.clientY - box.top}px, 0)`;
        }
      });
    }

    updateMotion();
    window.addEventListener('scroll', queueScrollMotion, { passive: true });
    window.addEventListener('pointermove', pointerMotion, { passive: true });

    root.addEventListener('click', handleClick);
    root.addEventListener('keydown', handleKeys);
    document.addEventListener('pointerdown', outsideMenus);
    function resizeMenus() {
      if (activeTrigger) showNavigation(activeTrigger);
      if (hamburger.offsetParent === null && !mobileMenu.inert) showMobile(false);
    }
    window.addEventListener('resize', resizeMenus);
    return () => {
      root.removeEventListener('click', handleClick);
      root.removeEventListener('keydown', handleKeys);
      document.removeEventListener('pointerdown', outsideMenus);
      window.removeEventListener('resize', resizeMenus);
      window.removeEventListener('scroll', queueScrollMotion);
      window.removeEventListener('pointermove', pointerMotion);
      document.body.classList.remove('menu-visible');
      observer.disconnect();
      stepObserver.disconnect();
      cancelAnimationFrame(motionFrame);
      cancelAnimationFrame(scrollFrame);
      stopSocialMotion();
      socialSection?.removeEventListener('pointerenter', stopSocialMotion);
      socialSection?.removeEventListener('pointerleave', startSocialMotion);
      socialSection?.removeEventListener('focusin', stopSocialMotion);
      socialSection?.removeEventListener('focusout', startSocialMotion);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [scope, showPreview]);
}

