const popupElement = document.querySelector('.popup');

if (!popupElement) {
  throw new Error('Popup element not found');
}

const popupCloseButton =
  popupElement.querySelector('.popup__close');

const popupImage =
  popupElement.querySelector('.popup__img');

const popupTitle =
  popupElement.querySelector('.popup__title');

const popupSubtitle =
  popupElement.querySelector('.popup__subtitle');

const popupDescription =
  popupElement.querySelector('.popup__description');

const popupAge =
  popupElement.querySelector('.popup__age');

const popupInoculations =
  popupElement.querySelector('.popup__inoculations');

const popupDiseases =
  popupElement.querySelector('.popup__diseases');

const popupParasites =
  popupElement.querySelector('.popup__parasites');

const supportPlanInputs =
  popupElement.querySelectorAll(
    'input[name="support-plan"]',
  );

const carePackageInputs =
  popupElement.querySelectorAll(
    'input[name="care-package"]',
  );

const supportPrice =
  popupElement.querySelector('.popup__support-price');

const supportDescription =
  popupElement.querySelector(
    '.popup__support-description',
  );

let currentPet = null;

function handleEscClose(event) {
  if (event.key === 'Escape') {
    closePopup();
  }
}

function getSelectedValue(inputs) {
  const selectedInput = [...inputs].find(
    (input) => input.checked,
  );

  return selectedInput?.value;
}

function resetSupportOptions() {
  const monthlyInput =
    popupElement.querySelector(
      'input[name="support-plan"][value="monthly"]',
    );

  const fullCareInput =
    popupElement.querySelector(
      'input[name="care-package"][value="full"]',
    );

  monthlyInput.checked = true;
  fullCareInput.checked = true;
}

function updateSupportInfo() {
  if (!currentPet) return;

  const selectedPlan =
    getSelectedValue(supportPlanInputs);

  const selectedPackage =
    getSelectedValue(carePackageInputs);

  const packageData =
    currentPet.support.packages[selectedPackage];

  if (selectedPlan === 'monthly') {
    supportPrice.textContent =
      `$${packageData.monthlyPrice} per month`;
  } else {
    supportPrice.textContent =
      `$${packageData.oneTimePrice} one-time`;
  }

  supportDescription.textContent =
    packageData.description;
}

function openPopup(pet) {
  currentPet = pet;

  popupElement.classList.add('is-active');
  document.body.classList.add('popup-open');

  document.addEventListener(
    'keydown',
    handleEscClose,
  );

  popupImage.src = pet.img;
  popupImage.alt = pet.name;

  popupTitle.textContent = pet.name;
  popupSubtitle.textContent =
    `${pet.type} - ${pet.breed}`;

  popupDescription.textContent =
    pet.description;

  popupAge.textContent = pet.age;

  popupInoculations.textContent =
    pet.inoculations.join(', ');

  popupDiseases.textContent =
    pet.diseases.join(', ');

  popupParasites.textContent =
    pet.parasites.join(', ');

  resetSupportOptions();
  updateSupportInfo();
}

function closePopup() {
  popupElement.classList.remove('is-active');
  document.body.classList.remove('popup-open');

  document.removeEventListener(
    'keydown',
    handleEscClose,
  );

  currentPet = null;
}

function initPopup() {
  popupCloseButton.addEventListener(
    'click',
    closePopup,
  );

  popupElement.addEventListener(
    'click',
    (event) => {
      if (event.target === popupElement) {
        closePopup();
      }
    },
  );

  supportPlanInputs.forEach((input) => {
    input.addEventListener(
      'change',
      updateSupportInfo,
    );
  });

  carePackageInputs.forEach((input) => {
    input.addEventListener(
      'change',
      updateSupportInfo,
    );
  });
}

export { initPopup, openPopup };
