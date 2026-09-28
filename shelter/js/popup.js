const popup = document.querySelector('.popup');

const popupImg = popup.querySelector('.popup__img');
const popupTitle = popup.querySelector('.popup__title');
const popupSubtitle = popup.querySelector('.popup__subtitle');
const popupDescription = popup.querySelector('.popup__description');
const popupAge = popup.querySelector('.popup__age');
const popupInoculations = popup.querySelector('.popup__inoculations');
const popupDiseases = popup.querySelector('.popup__diseases');
const popupParasites = popup.querySelector('.popup__parasites');

const closeButton = popup.querySelector('.popup__close');

const supportPlanInputs = popup.querySelectorAll(
  'input[name="support-plan"]',
);
const carePackageInputs = popup.querySelectorAll(
  'input[name="care-package"]',
);

const supportPrice = popup.querySelector('.popup__support-price');
const supportDescription = popup.querySelector(
  '.popup__support-description',
);

let currentPet = null;

function fillPopup(pet) {
  popupImg.src = pet.img;
  popupImg.alt = pet.name;

  popupTitle.textContent = pet.name;
  popupSubtitle.textContent = `${pet.type} - ${pet.breed}`;
  popupDescription.textContent = pet.description;
  popupAge.textContent = pet.age;
  popupInoculations.textContent = pet.inoculations.join(', ');
  popupDiseases.textContent = pet.diseases.join(', ');
  popupParasites.textContent = pet.parasites.join(', ');
}

function getSelectedValue(inputs) {
  const selectedInput = [...inputs].find((input) => input.checked);

  return selectedInput?.value;
}

function updateSupportSummary() {
  if (!currentPet) {
    return;
  }

  const selectedPlan = getSelectedValue(supportPlanInputs);
  const selectedPackage = getSelectedValue(carePackageInputs);

  const supportPackage =
    currentPet.support.packages[selectedPackage];

  if (selectedPlan === 'monthly') {
    supportPrice.textContent = `$${supportPackage.monthlyPrice} per month`;
  } else {
    supportPrice.textContent = `$${supportPackage.oneTimePrice} one-time`;
  }

  supportDescription.textContent = supportPackage.description;
}

function resetSupportOptions() {
  const monthlyInput = popup.querySelector(
    'input[name="support-plan"][value="monthly"]',
  );

  const fullCareInput = popup.querySelector(
    'input[name="care-package"][value="full"]',
  );

  monthlyInput.checked = true;
  fullCareInput.checked = true;
}

function openPopup(pet) {
  currentPet = pet;

  fillPopup(pet);
  resetSupportOptions();
  updateSupportSummary();

  popup.classList.add('is-active');
  document.body.classList.add('popup-open');

  document.addEventListener('keydown', handleEscClose);
}

function closePopup() {
  popup.classList.remove('is-active');
  document.body.classList.remove('popup-open');

  document.removeEventListener('keydown', handleEscClose);

  currentPet = null;
}

function handleEscClose(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
}

function initPopup() {
  closeButton.addEventListener('click', closePopup);

  popup.addEventListener('click', (evt) => {
    if (evt.target === popup) {
      closePopup();
    }
  });

  supportPlanInputs.forEach((input) => {
    input.addEventListener('change', updateSupportSummary);
  });

  carePackageInputs.forEach((input) => {
    input.addEventListener('change', updateSupportSummary);
  });
}

export { initPopup, openPopup };
