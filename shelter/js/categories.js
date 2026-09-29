let currentCategory = 'all';

function getPetsByCategory(pets, category) {
  if (category === 'all') {
    return pets;
  }

  return pets.filter(
    (pet) => pet.type.toLowerCase() === category,
  );
}

function initCategories(pets, updatePagination) {
  const categoryButtons = document.querySelectorAll(
    '.pets-categories__button',
  );

  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedCategory =
        button.dataset.category;

      if (selectedCategory === currentCategory) {
        return;
      }

      currentCategory = selectedCategory;

      categoryButtons.forEach((categoryButton) => {
        categoryButton.classList.remove(
          'pets-categories__button--active',
        );
      });

      button.classList.add(
        'pets-categories__button--active',
      );

      const filteredPets = getPetsByCategory(
        pets,
        currentCategory,
      );

      updatePagination(filteredPets);
    });
  });
}

export { initCategories };
