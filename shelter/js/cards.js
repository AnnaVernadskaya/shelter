
export function renderCards(pets) {
  const listCards = document.querySelector('.pets-page__list');
  const templateCard = document.querySelector('#pet-card-template');


  function createCard(pet) {
    const cardItem = templateCard.content.cloneNode(true);

    const imgCard = cardItem.querySelector('.our-friends__card-img');
    const titleCard = cardItem.querySelector('.our-friends__card-title');

    imgCard.src = pet.img;
    titleCard.textContent = pet.name;

    return cardItem;
}

listCards.innerHTML = '';

pets.forEach((card) => {
  listCards.append(createCard(card));
});

}

