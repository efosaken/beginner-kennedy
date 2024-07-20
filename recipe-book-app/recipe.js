//getting our API key
const apiKey = "275d58779ccf4e22af03e792e8819fff";

//getting the unordered list from the dom
const recipeList = document.getElementById("recipe-list")

//function to display the recipes on the page
function displayRecipes(recipes) {
recipeList.innerHTML = ""

//looping through the recipes data using the for each method to create the list of recipes and later append it the ul
recipes.forEach(recipe => {
    const recipeItem = document.createElement("li")
    recipeItem.classList.add("recipe-item")
    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.image
    recipeImage.alt = "recipe image";
    const recipeTitle = document.createElement("h2")
    recipeTitle.innerHTML = recipe.title;
    const recipeIngredients = document.createElement("p");
    recipeIngredients.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map(ingredient =>ingredient.original).join(", ")}`

const recipeLink = document.createElement("a")
recipeLink.href = recipe.sourceUrl;
recipeLink.innerText =  "View Recipe"
    


recipeItem.appendChild(recipeImage)
recipeItem.appendChild(recipeTitle)
recipeItem.appendChild(recipeIngredients)
recipeItem.appendChild(recipeLink)

    recipeList.appendChild(recipeItem)
});
}

//function to get the recipes from the website using an API. we are using an async function because we are going to wait the result
async function getRecipes(){
const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`)
const data = await response.json()

return data.recipes
}

//function to initialize the website when a person comes to the site
async function init(){
const recipes = await getRecipes()
displayRecipes(recipes)
}

init()