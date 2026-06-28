import { openPopup } from './popup.js';

export function renderCards(pets) {
  const listCards = document.querySelector('.pets-page__list');
  const templateCard = document.querySelector('#pet-card-template');

  function createCard(pet) {
    const cardItem = templateCard.content.cloneNode(true);

    const card = cardItem.querySelector('.our-friends__card');
    const imgCard = cardItem.querySelector('.our-friends__card-img');
    const titleCard = cardItem.querySelector('.our-friends__card-title');

    imgCard.src = pet.img;
    imgCard.alt = pet.name;
    titleCard.textContent = pet.name;

    card.addEventListener('click', () => {
      openPopup(pet);
    });

    return cardItem;
  }

  listCards.innerHTML = '';

  pets.forEach((pet) => {
    listCards.append(createCard(pet));
  });
}
