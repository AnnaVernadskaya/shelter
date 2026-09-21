console.log('JS connected');

import { initBurger } from './burger.js';
import { loadPets } from './data.js';
import { initPopup } from './popup.js';
import { initSlider } from './slider.js';
import { initThemeToggle } from './theme.js';

async function initMainPage() {
  initThemeToggle();

  const pets = await loadPets();

  initBurger();
  initPopup();
  initSlider(pets);
}

initMainPage();
