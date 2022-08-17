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
            console.log(data.meals.length);
            for (var i = 0; i < data.meals.length; i++) {
            var card = document.createElement('div')
            $(cardContainer).append(card);
            card.classList.add("card","col", "s12", "m6", "l4");
            card.style.marginLeft ="5px";
            card.style.width ="32.33%";

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
            mealName.style.fontSize ="20px";
            mealName.style.marginBottom ="0px";
            mealName.textContent = data.meals[i].strMeal

            var recipeBtn = document.createElement("a")
            recipeBtn.classList.add("btn-floating", "btn-medium", "waves-effect", "waves-light", "red","btn-margin");
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
}})
        };
