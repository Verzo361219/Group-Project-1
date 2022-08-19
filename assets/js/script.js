
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
  
  var token = response.access_token
  console.log(token)
  var list = $("#shoppingList")
//api pull from the kroger api using the created token
var settings2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.kroger.com/v1/products?filter.brand=Kroger&filter.term=chicken&filter.locationId=01400943&filter.limit=1",
    "method": "GET",
    "headers": {
      "Access-Control-Allow-Origin": "https://verzo361219.github.io/Group-Project-1/",
      "Accept": "application/json",
      "Authorization": "Bearer " + token 
    }
  }
  
  $.ajax(settings2).done(function (response) {
    console.log(response);
  })
  //this function finds and displays the price information on selected items through the kroger api
  .then(function(data2){
    var price = data2.data[0].items[0].price.regular
    console.log(price)
    
    var item = document.createElement('li')
    item.textContent = "$ " + price
    
    $(item).appendTo(list)
    
  })
 
});


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
        //  If input is blank then displayed error message in dialog or call api and displayed data.
        if(mealSearch === "")
        {
            displayErrorMsg()
        }
        else{
            displayMeals(mealSearch)
        }
       
    };

$(document).ready(function(){
     $('.modal').modal()
    });

// Added model class dynamically, opened model and delete class after second. 
function displayErrorMsg(){
    var btnTemp = document.querySelector("#btnSearch");
    btnTemp.classList.add("modal-trigger");
    btnTemp.setAttribute("href","#demo-modal")
    $('#demo-modal').modal();
    $("#demo-modal").modal('open', { dismissible: true, complete: function() { console.log('Close modal'); } })   
    $("#searchMealInput").val("");
    //dynamic class removed ater 1 seconds
    setTimeout(function () {
        btnTemp.classList.remove("modal-trigger");
           }, 1000);
}

function displayMeals(mealSearch){
var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + mealSearch 
    fetch(requestUrl)
        .then (function (response) {
            return response.json();
        })
        .then (function (data) {
            // It's check whether user enter correct meal name then data diaplay in grid otherwise error message is displayed
            if(data.meals === null)
            {
                displayErrorMsg();
            }
            else
            {
            for (var i = 0; i < data.meals.length; i++) {
            // Added dynamic elments, attributes and displayed in grid results
            var card = document.createElement('div')
            $(cardContainer).append(card);
            card.classList.add("card","col", "s12", "m6", "l4","customcard");

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
            cardContent.classList.add("card-content","center-align","customcardcontent");
            $(cardContent).append(mealName);
            mealName.setAttribute("class","card-title customcardtitle")
            
            // Displayed limited character as title and full name is displayed while hoverd to content
            // Added tooltip for tilte
            if(data.meals[i].strMeal.length > 17){
                mealName.textContent = data.meals[i].strMeal.substring(0,17) +"..."; // Disaplyed only 17 characters in textcontent
                mealName.classList.add("tooltip");
                var tooltipText = document.createElement('span');
                mealName.appendChild(tooltipText);
                tooltipText.classList.add("tooltiptext");
                tooltipText.textContent = data.meals[i].strMeal // Displyed full mealname in tooltip
            }
            else{
                mealName.textContent = data.meals[i].strMeal
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
        }
        })
          
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
                

