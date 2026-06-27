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
const buttonFirst = document.querySelector('.pagination-button--first');
const buttonLast = document.querySelector('.pagination-button--last');


  function updateButtonsState() {
    if (currentPage === 1) {
      buttonPrev.classList.add('pagination-button--disabled');
      buttonFirst.classList.add('pagination-button--disabled');
      buttonPrev.disabled = true;
      buttonFirst.disabled = true;
    } else {
      buttonPrev.classList.remove('pagination-button--disabled');
      buttonPrev.disabled = false;
            buttonFirst.classList.remove('pagination-button--disabled');
      buttonFirst.disabled = false;

    }

    if (currentPage === totalPages) {
      buttonNext.classList.add('pagination-button--disabled');
      buttonLast.classList.add('pagination-button--disabled');

      buttonNext.disabled = true;
      buttonLast.disabled = true;
    } else {
      buttonNext.classList.remove('pagination-button--disabled');
      buttonNext.disabled = false;
      buttonLast.classList.remove('pagination-button--disabled');
      buttonLast.disabled = false;
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
