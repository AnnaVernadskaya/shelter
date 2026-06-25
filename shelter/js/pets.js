console.log('JS connected pets');

import { renderCards } from './cards.js';
import { loadPets } from './cards.js';

async function init() {
    const pets = await loadPets();

    renderCards(pets);
}

init();
