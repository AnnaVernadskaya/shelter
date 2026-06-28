import { openPopup } from './popup.js';

let currentPets = [];
let isAnimating = false;

const ANIMATION_DURATION = 180;

function getCardsCount() {
  if (window.innerWidth >= 1280) {
    return 3;
  }

  if (window.innerWidth >= 768) {
    return 2;
  }

  return 1;
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getRandomPets(petsArray, count) {
  const shuffledPets = shuffleArray(petsArray);

  return shuffledPets.slice(0, count);
}

function getNextPets(petsArray) {
  const cardsCount = getCardsCount();

  const availablePets = petsArray.filter((pet) => {
    return !currentPets.some((currentPet) => currentPet.name === pet.name);
  });

  const shuffledAvailablePets = shuffleArray(availablePets);

  return shuffledAvailablePets.slice(0, cardsCount);
}

function createPetCard(pet) {
  const cardItem = document.createElement('li');
  cardItem.classList.add('our-friends__list-item');

  cardItem.innerHTML = `
    <article class="our-friends__card">
      <img class="our-friends__card-img" src="${pet.img}" alt="${pet.name}">
      <h3 class="our-friends__card-title">${pet.name}</h3>
      <button class="our-friends__card-button" type="button">
        Learn more
      </button>
    </article>
  `;

  const card = cardItem.querySelector('.our-friends__card');

  card.addEventListener('click', () => {
    openPopup(pet);
  });

  return cardItem;
}

function renderSliderCards(pets) {
  const sliderList = document.querySelector('.our-friends__list');

  sliderList.innerHTML = '';

  pets.forEach((pet) => {
    const card = createPetCard(pet);
    sliderList.append(card);
  });
}

function switchCards(petsArray, direction) {
  if (isAnimating) {
    return;
  }

  isAnimating = true;

  const sliderList = document.querySelector('.our-friends__list');
  const nextPets = getNextPets(petsArray);

  if (direction === 'next') {
    sliderList.classList.add('our-friends__list--move-left');
  }

  if (direction === 'prev') {
    sliderList.classList.add('our-friends__list--move-right');
  }

  setTimeout(() => {
    currentPets = nextPets;

    renderSliderCards(currentPets);

    sliderList.classList.remove('our-friends__list--move-left');
    sliderList.classList.remove('our-friends__list--move-right');

    sliderList.classList.add('our-friends__list--show');

    setTimeout(() => {
      sliderList.classList.remove('our-friends__list--show');
      isAnimating = false;
    }, ANIMATION_DURATION);
  }, ANIMATION_DURATION);
}

function updateSliderOnResize(petsArray) {
  const cardsCount = getCardsCount();

  if (currentPets.length === cardsCount) {
    return;
  }

  currentPets = getRandomPets(petsArray, cardsCount);
  renderSliderCards(currentPets);
}

export function initSlider(petsArray) {
  const buttonPrev = document.querySelector('.our-friends__button-slider--prev');
  const buttonNext = document.querySelector('.our-friends__button-slider--next');

  const cardsCount = getCardsCount();

  currentPets = getRandomPets(petsArray, cardsCount);

  renderSliderCards(currentPets);

  buttonNext.addEventListener('click', () => {
    switchCards(petsArray, 'next');
  });

  buttonPrev.addEventListener('click', () => {
    switchCards(petsArray, 'prev');
  });

  window.addEventListener('resize', () => {
    updateSliderOnResize(petsArray);
  });
}
