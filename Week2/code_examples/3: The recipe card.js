'use strict';
let recipe = {};
recipe.title = 'falafel';
recipe.servings = 2;
recipe.ingredients = ['Chickpeas (200 gr) ', 'water',];
console.log(recipe);
for (let element in recipe) {
  console.log(`${element}: ${recipe[element]}`);
}