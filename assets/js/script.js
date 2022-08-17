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
});

//api pull to the kroger api using the earlier created access token

var list = $("#shoppingList")
console.log(list)
var settings2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.kroger.com/v1/products?filter.brand=Kroger&filter.term=chicken&filter.locationId=01400943&filter.limit=1",
    "method": "GET",
    "headers": {
      "Access-Control-Allow-Origin": "https://verzo361219.github.io/Group-Project-1/",
      "Accept": "application/json",
      "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ3aGF0c2ZvcmRpbm5lcnRvbmlnaHQtZGIwZDliMzQ2MmYzYmM5ZWRmZWYwNjkyNDIxMThlMDU0NzA0ODE2MDgyMTA2NTgxNDMxIiwiZXhwIjoxNjYwNzY5NjM5LCJpYXQiOjE2NjA3Njc4MzQsImlzcyI6ImFwaS5rcm9nZXIuY29tIiwic3ViIjoiYTMwNmM3NGItYzM1ZC01MjNmLWFmNDgtN2U5YWYyMzE1MGIwIiwic2NvcGUiOiJwcm9kdWN0LmNvbXBhY3QiLCJhdXRoQXQiOjE2NjA3Njc4MzkzMDIxMzExMzUsImF6cCI6IndoYXRzZm9yZGlubmVydG9uaWdodC1kYjBkOWIzNDYyZjNiYzllZGZlZjA2OTI0MjExOGUwNTQ3MDQ4MTYwODIxMDY1ODE0MzEifQ.nXPHaHYghwfAQHcfoO7eLPZYIye4TmUsNWZXur-ivp90AjU8D4YWJvgX2QIpy2YyY0t7x0rSHZ_a92tKZJOO3AKQlRV6S38IWQfWGvD9BAYRwqkoDnLORPT7zSs9Cf7jWoSjQnoKemioE9J0SD9zFdraSc9zTXcypscngDQx3HSHa6X7BFFKgOoejglTuPXl376rAIJXelJHm8Zf9el7hOp8TmljbIGCrRKOhP2B0TZ1iOY5kPnmqXNZHLJj7HBWswm2cj_KGobUTR15Q7EiHuWQgcKgDtSD3O09WlMOX1P6GVkYEPDNFPvUH8mBHKPFRLbpllcUUcOdgyUllADMaw"
    }
  }
  
  $.ajax(settings2).done(function (response) {
    console.log(response);
  })
  //this function finds and displays the price information on selected items through the kroger api
  .then(function(data2){
    var price = data2.data[0].items[0].price.regular
    console.log(price)
    console.log(list)
    var item = document.createElement('li')
    item.textContent = "$ " + price
    console.log(item)
    $(item).appendTo(list)
    
  })
 