console.log("ohai")

const foodDisplay = document.querySelector("#foodList")


const nomsOnDom = (domNoms) => {
    
    return `<div class="eachNom">
                <h2>${domNoms.name}</h2>
                <p>${domNoms.category}</p>
                <p>${domNoms.ethnicity}</p>
            </div>`
}

fetch("http://localhost:8088/foods")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
            .then(response => response.json())
            .then(productInfo => {
                parsedFoods.forEach(product => {
                    food.ingredients = productInfo.product.ingredients
                    // food.country = productInfo.product.countries_hierarchy
                    // food.calories = productInfo.product.nutriments.energy
                    // food.sugar = productInfo.product.nutriments.sugars
                    // food.fat = productInfo.product.nutriments.fat
                    
                })

                foodDisplay.innerHTML += nomsOnDom(food)

            })
        })
})

