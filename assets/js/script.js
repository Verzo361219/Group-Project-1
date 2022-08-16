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
