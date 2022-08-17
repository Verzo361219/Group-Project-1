
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
  var fooditem = "chicken"
  var list = $("#shoppingList")
//api pull from the kroger api using the created token
var settings2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.kroger.com/v1/products?filter.brand=Kroger&filter.term="+fooditem+"&filter.locationId=01400943&filter.limit=1",
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

searchBtn.addEventListener("click", handleMealFetch);

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

            var card = document.createElement('div')
            $(cardContainer).append(card);
            card.classList.add("card");

            var cardImage = document.createElement('div');
            card.appendChild(cardImage);
            cardImage.classList.add("card-image");
            
            var mealImageURL = data.meals[0].strMealThumb;
            var mealImageDisplay = document.createElement('img');
            mealImageDisplay.setAttribute('src', mealImageURL)
            $(cardImage).append(mealImageDisplay);

            var mealName = document.createElement('span');
            $(cardImage).append(mealName);
            mealName.classList.add("card-title")
            mealName.textContent = data.meals[0].strMeal

            var addBtn = document.createElement("a")
            addBtn.classList.add("btn-floating", "halfway-fab", "waves-effect", "waves-light", "red");
            $(cardImage).append(addBtn);

            var addIcon = document.createElement("i");
            addIcon.classList.add("material-icons");
            addIcon.innerHTML = "add";
            $(addBtn).append(addIcon);


            // var mealName = document.createElement('h4');
            // mealName.classList.add("card-title")
        


            // cardBody.appendChild(mealName);
            // cardBody.appendChild(mealThumbDisplay)

            // mealName.textContent = data.meals[0].strMeal;

            var mealID = data.meals[0].idMeal;
            console.log(mealID);

            var requestMealURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID;
            fetch(requestMealURL)
                .then(function (response) {
                    return response.json();
                })
                .then (function (data1) {
                    console.log(data.meals[0].strMeal);
                    console.log(data.meals[0].strMealThumb);
                    // var instructionsList = document.createElement('li');
                    // instructionsList.classList.add("card-text");
                    // cardBody.appendChild(instructionsList);
                    // instructionsList.textContent = data1.meals[0].strInstructions;

        //             var ingredientsList = document.createElement("ul")
        //             ingredientsList.classList.add("card-text");
        //             cardBody.appendChild(ingredientsList);

        //             console.log("test: " , data1.meals[0])

        //             var meal = data1.meals[0];
        //             var ingredients = []
        //             var measurements = []
        //             for (var e = 1; e < 21; e++) {
        //                 if (meal["strIngredient" + e] === ''){
        //                     continue;
        //                 }
        //                 ingredients.push(meal["strIngredient" + e]);
        //                 measurements.push(meal["strMeasure" + e]);
                        
        //                 var ingredientsListItems = document.createElement('li')
        //                 ingredientsList.appendChild(ingredientsListItems);
        //                 ingredientsListItems.innerHTML = meal["strMeasure" + e] + "   " + meal["strIngredient" + e];
        //             }
                                            
        //                 console.log(measurements);
        //                 console.log(ingredients);
                })
            })
        };

