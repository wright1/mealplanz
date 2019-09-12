

const getAllRecipes = (e, str) => {

    e.preventDefault();

    let calories = str;
    let key = process.env.REACT_APP_API_KEY

    fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${key}&maxCalories=${calories}&includeInstruction=true&number=50`)
    .then(results => console.log(results.json()))
    

}

export default getAllRecipes