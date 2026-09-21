console.log('JS connected pets');

import { loadPets } from './data.js';
import { initPagination } from './pagination.js';
import { initPopup } from './popup.js';
import { initBurger } from './burger.js';
import { initThemeToggle } from './theme.js';

async function initPetsPage() {
  initThemeToggle();

  const pets = await loadPets();

  initPagination(pets);
  initPopup();
  initBurger();
}

initPetsPage();
