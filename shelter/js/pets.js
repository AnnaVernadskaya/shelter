console.log('JS connected pets');

import { loadPets } from './data.js';
import { initPagination } from './pagination.js';

async function initPetsPage() {
  const pets = await loadPets();

  initPagination(pets);
}

initPetsPage();
