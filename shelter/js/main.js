console.log('JS connected');

import { initBurger } from './burger.js';
import { loadPets } from './data.js';
import { initPopup } from './popup.js';
import { initSlider } from './slider.js';

async function initMainPage() {
  const pets = await loadPets();

  initBurger();
  initPopup();
  initSlider(pets);
}

initMainPage();
