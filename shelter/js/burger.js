export function initBurger() {
  const burgerButton = document.querySelector(".burger");
  const headerNavigation = document.querySelector(".header-nav");
  const overlay = document.querySelector(".overlay");
  const navLink = document.querySelectorAll(".header-nav__list-link");

  function openBurgerMenu() {
    headerNavigation.classList.toggle("is-active");
    burgerButton.classList.toggle("is-active");
    overlay.classList.toggle("is-active");

    document.body.classList.toggle("menu-open");
  }

  function closeBurgerMenu() {
    headerNavigation.classList.remove("is-active");
    burgerButton.classList.remove("is-active");
    overlay.classList.remove("is-active");
    document.body.classList.remove("menu-open");
  }

  navLink.forEach((link) => {
    link.addEventListener("click", closeBurgerMenu);
  });

  overlay.addEventListener("click", closeBurgerMenu);

  burgerButton.addEventListener("click", openBurgerMenu);
}
