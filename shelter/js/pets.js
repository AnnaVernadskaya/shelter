console.log('JS connected pets');

import { loadPets } from './data.js';
import { initPagination } from './pagination.js';
import { initPopup } from './popup.js';
import { initBurger } from './burger.js';
import { initThemeToggle } from './theme.js';
import { initCategories } from './categories.js';

async function initPetsPage() {
  initThemeToggle();

  const pets = await loadPets();

  const updatePagination = initPagination(pets);

  initCategories(pets, updatePagination);

  initPopup();
  initBurger();
}

initPetsPage();
