# 🥙 What's For Dinner? 🥙
Application to find and discover foods by certain criteria that the user decides. Ability to populate a shopping list for meal and get prices.

## Table of Contents 

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria-✅)
- [Mock-Up](#mock-up)
- [Data](#data)
- [Build](#build)
- [Setup](#setup)
- [Deployment Link](#deployment-link)
- [Tools](#tools-🔧)
- [Technologies](#technologies-💻)
- [Credits](#credits-©)


## Description
 Application where user can search random recipe by entering ingredient name. When user select any recipe from search results and add into list then user can able to see ingredients with price in shopping list.


## User Story

As a USER, <br/>
I want to discover new meals based on search criteria and populate a shopping list with prices <br/>
So that I can plan my meal for the day and the cost of the ingredients. <br/>


## Acceptance Criteria ✅

GIVEN a Dinner Meal with form input <br/>

WHEN I search for a meal <br/>
THEN I am presented with options of meals including ingredients, an image, and sample instructions. <br/>

WHEN I enter blank/incorrect meal name in search <br/>
THEN Error message is displayed to User with empty search results. <br/>

WHEN I select the meal that i want to choose <br/>
THEN I will have the ingredients listed in a shopping list and the instructions to prepare in separate divs.<br/> 
And the meal is stored in local storage <br/>

WHEN  the ingredients are listed <br/>
THEN I am presented the price of the ingredients <br/>

WHEN I click the add to cart button <br/>
THEN I am presented with the ability to purchase the items from Kroger <br/>

WHEN I Click the Random Meal button <br/>
THEN a Random Meal is chosen and placed in the shopping list/instructions divs as well as local storage. <br/>

WHEN I click the clear button <br/>
THEN the meal is removed from local storage and I can start again. <br/>


## Mock-Up

![Screenshot](/assets/Images/2022-08-22_00-06-53.png)
![Screenshot](./assets/Images/2022-08-22_00-07-28.png)
![Screenshot](./assets/Images/2022-08-22_00-07-49.png)


## Data

The application uses the following data inputs:

 - Meal recipe information is provided by TheMealDB API. Documentation can be found here. <a href="https://themealdb.com/"> TheMealDB </a>
 - Shopping list prices are provide by Kroger API. Documentation can be found here. <a href="https://developer.kroger.com/documentation"> Kroger </a>


## Build

- In HTML semantic tags have been used to aid with accessibility.<br/>
- The site is built using Materialize CSS framework.<br/>
      -     Used Grid, Modal dialog and many more inbuilt funcationality prvided by framework.<br/>
      -     Applied custom style to application with provided options.<br/>
- jQuery used dynamic rendering of the html content based on user input.<br/>
- Retrive data from external API The MealDB and Kroger based on User Input.<br/>
- Used google font API for font style.<br/>
- Used local storage for store shopping list data.<br/>
- Used Timer functinality for removing dynamically added class and api call in js.


## Setup 

To clone the Repo. <br/>
> git clone git@github.com:Verzo361219/Whats-For-Dinner.git


## Deployment Link

Here is the link for application. <br/>

🟢 CLICK HERE &#10145;  


## Tools 🔧
- Visual Studio Code <br/>
- Github <br/>
- Browser <br/>


## Technologies 💻

- HTML <br/>
- CSS <br/>
- Javascript <br/>
- Server Side API - MealDB, Krogger <br/>
- Front-end framework - Materialize <br/>


## Credits ©
- <a href="https://github.com/Verzo361219"> Brandon Hobbs </a> 🏆 <br/>
- <a href="https://github.com/CBrunote"> Christian Bruno </a>🏆  <br/>
- <a href="https://github.com/lflyew"> Latoya Lyew </a>🏆  <br/>
- <a href="https://github.com/VaishaliQA"> Vaishali Patel </a>🏆 

