console.log("JS connected");

import { initBurger } from "./burger.js";
import { loadPets } from "./data.js";
import { initPopup, initStaticCardsPopup } from "./popup.js";

async function initMainPage() {
  const pets = await loadPets();

  initBurger();
  initPopup();
  initStaticCardsPopup(pets);
}

initMainPage();
