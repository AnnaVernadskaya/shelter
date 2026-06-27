console.log("JS connected pets");

import { loadPets } from "./data.js";
import { initPagination } from "./pagination.js";
import { initPopup } from "./popup.js";
import { initBurger } from "./burger.js";

async function initPetsPage() {
  const pets = await loadPets();

  initPagination(pets);
  initPopup();
  initBurger();
}

initPetsPage();
