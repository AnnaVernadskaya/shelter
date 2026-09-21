export async function loadPets() {
  const response = await fetch('./data/pets.json');
  const petsArray = await response.json();

  return petsArray;
}
