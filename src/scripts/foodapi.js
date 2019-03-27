console.log("ohai")

const foodDisplay = document.querySelector("#foodList")

const nomsOnDom = (domNoms) => {
    return `<div class="eachNom">
                <h2>${domNoms.name}</h2>
                <p>${domNoms.category}</p>
                <p>${domNoms.ethnicity} 
            </div>`
}

fetch("http://localhost:8088/foods")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
            .then(response => response.json())
            .then(productInfo => {
                food.
                foodDisplay.innerHTML += nomsOnDom(food)
            })
        })
})


