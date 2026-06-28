import { renderCards } from './cards.js';

let currentPage = 1;

function getCardsPerPage() {
  if (window.innerWidth < 768) return 3;
  if (window.innerWidth < 1280) return 6;
  return 8;
}

export function createFullPetsList(petsArray) {
  const fullPetsList = [];

  for (let i = 0; i < 6; i++) {
    const shiftedPets = [...petsArray.slice(i), ...petsArray.slice(0, i)];
    fullPetsList.push(...shiftedPets);
  }

  return fullPetsList;
}

function getCardsForPage(arr, currentPage, cardsPerPage) {
  const start = (currentPage - 1) * cardsPerPage;
  const end = start + cardsPerPage;

  return arr.slice(start, end);
}

export function initPagination(petsArray) {
  const fullPetsList = createFullPetsList(petsArray);

  const buttonPrev = document.querySelector('.pagination-button--prev');
  const buttonNext = document.querySelector('.pagination-button--next');
  const buttonCurrent = document.querySelector('.pagination-button--current');
  const buttonFirst = document.querySelector('.pagination-button--first');
  const buttonLast = document.querySelector('.pagination-button--last');

  const cardsContainer = document.querySelector('.pets-page__list');

  function getTotalPages() {
    return fullPetsList.length / getCardsPerPage();
  }

  function setDisabled(button, isDisabled) {
    button.classList.toggle('pagination-button--disabled', isDisabled);
    button.disabled = isDisabled;
  }

  function updateButtonsState() {
    const totalPages = getTotalPages();

    setDisabled(buttonPrev, currentPage === 1);
    setDisabled(buttonFirst, currentPage === 1);

    setDisabled(buttonNext, currentPage === totalPages);
    setDisabled(buttonLast, currentPage === totalPages);
  }

  function renderPage() {
    const cardsPerPage = getCardsPerPage();
    const totalPages = getTotalPages();

    if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    const pageCards = getCardsForPage(fullPetsList, currentPage, cardsPerPage);

    if (cardsContainer) {
      cardsContainer.classList.add('pets-page__list--fade');
    }

    setTimeout(() => {
      renderCards(pageCards);
      buttonCurrent.textContent = currentPage;
      updateButtonsState();

      if (cardsContainer) {
        cardsContainer.classList.remove('pets-page__list--fade');
      }
    }, 200);
  }

  buttonNext.addEventListener('click', () => {
    if (currentPage < getTotalPages()) {
      currentPage++;
      renderPage();
    }
  });

  buttonPrev.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage();
    }
  });

  buttonFirst.addEventListener('click', () => {
    if (currentPage !== 1) {
      currentPage = 1;
      renderPage();
    }
  });

  buttonLast.addEventListener('click', () => {
    if (currentPage !== getTotalPages()) {
      currentPage = getTotalPages();
      renderPage();
    }
  });

  window.addEventListener('resize', renderPage);

  renderPage();
}
