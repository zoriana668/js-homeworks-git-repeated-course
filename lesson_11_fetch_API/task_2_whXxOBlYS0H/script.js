// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути в списку під час відображення.

fetch('https://dummyjson.com/recipes')
.then(res => res.json())
    .then(({recipes}) => {
        let recipesBlock = document.createElement('div');
        recipesBlock.classList.add('recipes');
        document.body.appendChild(recipesBlock);


        //  тут створення блоків рецептів ----------------------------------
        recipes.forEach(recipe => {
            let recipeBlock = document.createElement('div');
            recipeBlock.classList.add('recipe');

            // console.log(recipe);

            let recipeName = document.createElement('h4');
            let recipePreparationTime = document.createElement('p');
            let recipePhoto = document.createElement('img');
            let recipeCalories = document.createElement('p');
            let recipeCuisine = document.createElement('p');
            let recipeDifficulty = document.createElement('p');

            recipeName.innerText = recipe.name;
            recipePreparationTime.innerText = `Preparation time - ${recipe.prepTimeMinutes} minutes`;
            recipeCalories.innerText = `Calories - ${recipe.caloriesPerServing}`;
            recipeDifficulty.innerText = `Difficulty - ${recipe.difficulty}`;
            recipeCuisine.innerText = `Cuisine - ${recipe.cuisine}`;
            recipePhoto.src = recipe.image;

            // тут деструктуризація масиву ingredients та створення списку для ingredients
            let {ingredients} = recipe;

            let ingredientsList = document.createElement('ul');
            let ingredientsHeading = document.createElement('h5');
            ingredientsHeading.innerText = `Ingredients:`;


            for(let i = 0; i < ingredients.length; i++) {
                let ingredientElem = document.createElement('li');
                ingredientElem.innerText = ingredients[i];
                ingredientsList.appendChild(ingredientElem);
            }

            // тут деструктуризація масиву instructions та створення для нього блоку
            let {instructions} = recipe;

            let recipeInstructions = document.createElement('div');
            let instructionsHeading = document.createElement('h5');
            instructionsHeading.innerText = `Instruction for preparation:`;

            for(let j = 0; j < instructions.length; j++) {
                let instructionStep = document.createElement('p');
                instructionStep.innerHTML =`Step ${j+1} - ${instructions[j]}`;
                recipeInstructions.appendChild(instructionStep);
            }


            recipeBlock.append(recipeName, recipePreparationTime, recipeCalories, recipeDifficulty, recipeCuisine, recipePhoto, ingredientsHeading, ingredientsList, instructionsHeading, recipeInstructions);
            recipesBlock.appendChild(recipeBlock);
        });
    });


