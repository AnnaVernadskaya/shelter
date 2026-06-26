import { renderCards } from './cards.js';

let currentPage = 1;
const cardsPerPage = 8;

export function createFullPetsList(petsArray) {
  const fullPetsList = [];

  for (let i = 0; i < 6; i++) {
    const shuffled = [...petsArray].sort(() => Math.random() - 0.5);
    fullPetsList.push(...shuffled);
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
  const totalPages = fullPetsList.length / cardsPerPage;

  const buttonPrev = document.querySelector('.pagination-button--prev');
  const buttonNext = document.querySelector('.pagination-button--next');
  const buttonCurrent = document.querySelector('.pagination-button--current');

  function updateButtonsState() {
    if (currentPage === 1) {
      buttonPrev.classList.add('pagination-button--disabled');
      buttonPrev.disabled = true;
    } else {
      buttonPrev.classList.remove('pagination-button--disabled');
      buttonPrev.disabled = false;
    }

    if (currentPage === totalPages) {
      buttonNext.classList.add('pagination-button--disabled');
      buttonNext.disabled = true;
    } else {
      buttonNext.classList.remove('pagination-button--disabled');
      buttonNext.disabled = false;
    }
  }

  function renderPage() {
    const pageCards = getCardsForPage(fullPetsList, currentPage, cardsPerPage);

    renderCards(pageCards);
    buttonCurrent.textContent = currentPage;
    updateButtonsState();
  }

  buttonNext.addEventListener('click', () => {
    if (currentPage < totalPages) {
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

  renderPage();
}
