const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__close");

function openPopup() {
  popup.classList.add("is-active");
  document.addEventListener("keydown", handleEscClose);
}

function closePopup() {
  popup.classList.remove("is-active");
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

function initCardsPopup() {
  const cards = document.querySelectorAll(".our-friends__card");

  cards.forEach((card) => {
    card.addEventListener("click", openPopup);
  });
}

export { initPopup, initCardsPopup };
