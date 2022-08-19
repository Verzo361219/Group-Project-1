var cardContainer = document.querySelector('.cardContainer');
var searchInput = document.querySelector('#searchMealInput');
var searchBtn =  document.querySelector('#btnSearch');
var ingredientsList = document.querySelector('.ingredients-list');
var modalContainer = document.querySelector('.modalContainer');
var modalMeal = document.querySelector('.recipe-title');
var modalInstructions = document.querySelector('.recipe-instructions');
var modalIngredients = document.querySelector('.ingredients-list');
var modalURL = document.querySelector('#videoURL');
var modalThumb = document.querySelector('#mealThumb');
var shoppingList = document.querySelector('#shopping-list');
var modalListAdd = document.querySelector('.listAdd');
var shoppingListItems = '';
var token = '';
var clearButton = document.querySelector('.clearBtn');


$(document).ready(function(){
  $('#modal1').modal()
  });

//access token fetch request
var getToken = {
  async: true,
  crossDomain: true,
  url: "https://us-central1-tri-auto-pub-zoom.cloudfunctions.net/krogerHack/kroger",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  processData: false,
  data: JSON.stringify({
    auth: "d2hhdHNmb3JkaW5uZXJ0b25pZ2h0LWRiMGQ5YjM0NjJmM2JjOWVkZmVmMDY5MjQyMTE4ZTA1NDcwNDgxNjA4MjEwNjU4MTQzMTpjN0xkNnB2WFF3alNJa0ZvMVQ4aTdOR3NWcm1oaWVGbUhRRzJkck90",
    scope: "product.compact",
  }),
};

$.ajax(getToken).done(function (response) {
  console.log(response);
  
  token = response.access_token
  console.log(token)
})

//api pull from the kroger api using the created token
function getKrogerPrice(searchItem) {
  console.log(searchItem)
  var price = ''

  var settings2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.kroger.com/v1/products?filter.brand=Kroger&filter.term="  + searchItem.split(" ").join("%20") + "&filter.locationId=01400943&filter.limit=1",
    "method": "GET",
    "headers": {
      "Access-Control-Allow-Origin": "https://verzo361219.github.io/Group-Project-1/",
      "Accept": "application/json",
      "Authorization": "Bearer " + token 
    }
  }

  return $.ajax(settings2).done(function (response) {
    console.log(response);
  })
  //this function finds and displays the price information on selected items through the kroger api
  .then(function(data2){
    price = data2.data[0].items[0].price.regular
    console.log(price)
    return [price, searchItem];
  })
};

searchBtn.addEventListener("click", handleMealFetch);

modalListAdd.addEventListener("click", createShoppingList)

clearButton.addEventListener("click", clearList);

modalListAdd.addEventListener("click", createShoppingList)

clearButton.addEventListener("click", clearList);

function handleMealFetch(event) {
    event.preventDefault();
        console.log("item Searched")
        console.log(searchInput.value)
        var mealSearch = searchInput.value
        console.log(mealSearch)
        displayMeals(mealSearch)
    };

function displayMeals(mealSearch){
var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + mealSearch 
    fetch(requestUrl)
        .then (function (response) {
            return response.json();
        })
        .then (function (data) {
            console.log(data);
            console.log(data.meals.length);
            if (cardContainer.textContent === '') {
            for (var i = 0; i < data.meals.length; i++) {
            var card = document.createElement('div')
            $(cardContainer).append(card);
            card.classList.add("card","col", "s12", "m6", "l4");
            card.style.marginCenter ="4px";
            card.style.width ="33.33%git ";
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
            mealName.style.fontSize ="1rem";
            mealName.style.marginBottom ="0px";

            // Displayed limited character as title and full name is displayed while hoverd to content
            // Added tooltip for tilte
            if(data.meals[i].strMeal.length > 20) {
                mealName.textContent = data.meals[i].strMeal.substring(0,17) +"...";
                mealName.classList.add("tooltip")
                var tooltipText = document.createElement('span');
                mealName.appendChild(tooltipText)
                tooltipText.classList.add("tooltiptext")
                tooltipText.textContent = data.meals[i].strMeal
            } else {
                mealName.textContent = data.meals[i].strMeal
                console.log("min ", data.meals[i].strMeal)
            }
           
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
            } else {
              cardContainer.textContent = ''
              console.log("container cleared")
              displayMeals(mealSearch)
            }
        });
}

function getMealRecipe(meal){
    meal.preventDefault();
    console.log(meal);
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
        shoppingListItems = ingredients;
}

function createShoppingList() {
  if (shoppingList.innerHTML === '') {
  console.log(shoppingListItems)   
  localStorage.setItem("shoppingList", JSON.stringify(shoppingListItems));
    for (var i = 0; i < shoppingListItems.length; i++) {
    getKrogerPrice(shoppingListItems[i]).then(function(krogerPrice){
      var listItems = document.createElement('li')
      listItems.innerHTML = krogerPrice[1] + " $" +  krogerPrice[0]
      shoppingList.appendChild(listItems)
      })
    }
  }else {
    shoppingList.innerHTML = ''
    createShoppingList()
  }
// Scrolls to the top of the webpage after a mean is added to the shopping list
  $('html, body').animate({ scrollTop: 0 }, 'fast');
};

//displays shopping list on page load based off of the saved informaiton in local storage
function getstoredList() {
  if (localStorage.getItem("shoppingList")) {
    console.log("retrieved")
    shoppingListItems = JSON.parse(localStorage.getItem("shoppingList"));
    console.log(shoppingListItems)
    createShoppingList();
  }
}
setTimeout (function() {
  getstoredList()
}, 1000);

function clearList() {
  console.log("cleared");
  shoppingListItems = '';
  shoppingList.innerHTML = ''
  window.localStorage.clear();
  return;
}