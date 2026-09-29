export function initBurger() {
  const burgerBtn = document.querySelector('.burger');
  const navMenu = document.querySelector('.header-nav');
  const navLinks = document.querySelectorAll(
    '.header-nav__list-link',
  );
  const overlay = document.querySelector('.overlay');
  const body = document.body;

  const toggleMenu = () => {
    burgerBtn.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
    overlay.classList.toggle('is-active');
    body.classList.toggle('menu-open');
  };

  const closeMenu = () => {
    burgerBtn.classList.remove('is-active');
    navMenu.classList.remove('is-active');
    overlay.classList.remove('is-active');
    body.classList.remove('menu-open');
  };

  burgerBtn.addEventListener('click', toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('is-active')) {
        closeMenu();
      }
    });
  });

  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      navMenu.classList.contains('is-active')
    ) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    navMenu.style.transition = 'none';

    if (
      window.innerWidth > 768 &&
      navMenu.classList.contains('is-active')
    ) {
      closeMenu();
    }

    navMenu.offsetHeight;
    navMenu.style.transition = '';
  });
}
