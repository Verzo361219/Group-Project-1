var cardContainer = document.querySelector('.cardContainer');
var searchInput = document.querySelector('#searchMealInput');
var searchBtn =  document.querySelector('#btnSearch');
var ingredientsList = document.querySelector('.ingredients-list');
var modalContainer = document.querySelector('.modalContainer');
var modalMeal = document.querySelector('.recipe-title');
// var modalCategory = document.querySelector('.recipe-category');
var modalInstructions = document.querySelector('.recipe-instructions');
var modalIngredients = document.querySelector('.ingredients-list');
var modalURL = document.querySelector('#videoURL');
var modalThumb = document.querySelector('#mealThumb');


searchBtn.addEventListener("click", handleMealFetch);

function handleMealFetch(event) {
    event.preventDefault();
        console.log("item Searched")
        console.log(searchInput.value)
        var mealSearch = searchInput.value
        console.log(mealSearch)
        displayMeals(mealSearch)
    };

$(document).ready(function(){
    $('.modal').modal()
    });

function displayMeals(mealSearch){
var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + mealSearch 
    fetch(requestUrl)
        .then (function (response) {
            return response.json();
        })
        .then (function (data) {
            console.log(data);
            console.log(data.meals.length);
            for (var i = 0; i < data.meals.length; i++) {
            var card = document.createElement('div')
            $(cardContainer).append(card);
            card.classList.add("card","col", "s12", "m6", "l4");
            card.style.marginLeft ="5px";
            card.style.width ="32.33%";
            card.setAttribute("dataid", data.meals[i].idMeal)

            var cardImage = document.createElement('div');
            card.appendChild(cardImage);
            cardImage.classList.add("card-image");
            
            var mealImageURL = data.meals[i].strMealThumb;
            var mealImageDisplay = document.createElement('img');
            mealImageDisplay.setAttribute('src', mealImageURL)
            $(cardImage).append(mealImageDisplay);

            var mealName = document.createElement('span');
            var cardContent = document.createElement('div')
            $(card).append(cardContent);
            cardContent.classList.add("card-content","center-align");
            cardContent.style.padding = "0px"
            $(cardContent).append(mealName);
            mealName.classList.add("card-title")
            mealName.style.fontWeight ="bold";
            mealName.style.fontSize ="18px";
            mealName.style.marginBottom ="0px";
            mealName.textContent = data.meals[i].strMeal

            var recipeBtn = document.createElement("a")
            recipeBtn.classList.add("recipeBtn","btn-floating", "btn-medium", "waves-effect", "waves-light", "red", "btn-margin", "modal-trigger");
            recipeBtn.href = "#modal1"
            recipeBtn.addEventListener("click", getMealRecipe);
            $(cardContent).append(recipeBtn);

            var addIcon = document.createElement("i");
            addIcon.classList.add("material-icons");
            addIcon.innerHTML = "message";
            $(recipeBtn).append(addIcon);

            var addBtn = document.createElement("a")
            addBtn.classList.add("btn-floating", "btn-medium", "waves-effect", "waves-light", "red","btn-margin");
            $(cardContent).append(addBtn);

            var addIcon = document.createElement("i");
            addIcon.classList.add("material-icons");
            addIcon.innerHTML = "add";
            $(addBtn).append(addIcon);
            }
        });
}

function getMealRecipe(meal){
    meal.preventDefault();
    console.log("button Pushed");
    if(meal.currentTarget.classList.contains('modal-trigger')){
        console.log("true");
        var mealItem = meal.currentTarget.parentElement.parentElement;
        console.log(mealItem.getAttribute("dataid"));
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.getAttribute("dataid")}`)
        .then (function(response) {
            return response.json()
        })
        .then (function(data) {
            mealRecipeModal(data.meals);
        })
    }
}

function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];

    //Updates Recipe Modal to reflect selected meal
        modalMeal.textContent = meal.strMeal
        // modalCategory.textContent = meal.strCategory;
        modalInstructions.textContent = meal.strInstructions;
        modalURL.setAttribute("href", meal.strYoutube);
        modalThumb.setAttribute("src", meal.strMealThumb);

    // Creates Ingredients List
        var ingredients = []
        var measurements = []
        for (var e = 1; e < 21; e++) {
            if (meal["strIngredient" + e] === ''){
                continue;
            }
            ingredients.push(meal["strIngredient" + e]);
            measurements.push(meal["strMeasure" + e]);
            
            var ingredientsListItems = document.createElement('li')
            modalIngredients.appendChild(ingredientsListItems);
            ingredientsListItems.innerHTML = meal["strMeasure" + e] + "   " + meal["strIngredient" + e];
        }
}
                
