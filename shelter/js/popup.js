const popup = document.querySelector(".popup");

const popupImg = popup.querySelector(".popup__img");
const popupTitle = popup.querySelector(".popup__title");
const popupSubtitle = popup.querySelector(".popup__subtitle");
const popupDescription = popup.querySelector(".popup__description");
const popupAge = popup.querySelector(".popup__age");
const popupInoculations = popup.querySelector(".popup__inoculations");
const popupDiseases = popup.querySelector(".popup__diseases");
const popupParasites = popup.querySelector(".popup__parasites");
const closeButton = popup.querySelector(".popup__close");

function fillPopup(pet) {
  popupImg.src = pet.img;
  popupImg.alt = pet.name;

  popupTitle.textContent = pet.name;
  popupSubtitle.textContent = `${pet.type} - ${pet.breed}`;
  popupDescription.textContent = pet.description;
  popupAge.textContent = pet.age;
  popupInoculations.textContent = pet.inoculations.join(", ");
  popupDiseases.textContent = pet.diseases.join(", ");
  popupParasites.textContent = pet.parasites.join(", ");
}

function openPopup(pet) {
  fillPopup(pet);

  popup.classList.add("is-active");
  document.body.classList.add("popup-open");
  document.addEventListener("keydown", handleEscClose);
}

function closePopup() {
  popup.classList.remove("is-active");
  document.body.classList.remove("popup-open");
  document.removeEventListener("keydown", handleEscClose);
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    closePopup();
  }
}

function initPopup() {
  closeButton.addEventListener("click", closePopup);

  popup.addEventListener("click", (evt) => {
    if (evt.target === popup) {
      closePopup();
    }
  });
}

function initStaticCardsPopup(pets) {
  const cards = document.querySelectorAll(".our-friends__card");

  cards.forEach((card) => {
    const title = card.querySelector(".our-friends__card-title");
    const pet = pets.find((item) => item.name === title.textContent);

    card.addEventListener("click", () => {
      openPopup(pet);
    });
  });
}

export { initPopup, openPopup, initStaticCardsPopup };
