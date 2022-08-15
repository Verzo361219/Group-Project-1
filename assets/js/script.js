var mainContainer = document.querySelector('.container');

function displayMeal(){
var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=ground_beef' 
    fetch(requestUrl)
        .then (function (response) {
            return response.json();
        })
        .then (function (data) {
            console.log(data);
            // var columnDiv = document.createElement('div');
            // mainContainer.appendChild(columnDiv);
            // // columnDiv.classList.add("col", "align-self-left");

            // var card = document.createElement('div');
            // columnDiv.appendChild(card);
            // card.classList.add("card", "border-dark", "mb-3", "row");
        
            // var cardBody = document.createElement('div');
            // card.appendChild(cardBody);
            // cardBody.classList.add("card-body","text-left");

            // var mealName = document.createElement('h4');
            // mealName.classList.add("card-title")
        
            // var mealThumbURL = data.meals[0].strMealThumb;
            // var mealThumbDisplay = document.createElement('img');
            // mealThumbDisplay.setAttribute('src', mealThumbURL)
            // mealThumbDisplay.setAttribute('width', "25%");

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
                    console.log(data1);
        //             var instructionsList = document.createElement('li');
        //             instructionsList.classList.add("card-text");
        //             cardBody.appendChild(instructionsList);
        //             instructionsList.textContent = data1.meals[0].strInstructions;

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
        }
        

    displayMeal()
