// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://cors-anywhere.herokuapp.com/https://api.kroger.com/v1/connect/oauth2/token",
//     "method": "POST",
//     "headers": {
//       "Content-Type": "application/x-www-form-urlencoded",
//       "Authorization": "Basic d2hhdHNmb3JkaW5uZXJ0b25pZ2h0LWRiMGQ5YjM0NjJmM2JjOWVkZmVmMDY5MjQyMTE4ZTA1NDcwNDgxNjA4MjEwNjU4MTQzMTpjN0xkNnB2WFF3alNJa0ZvMVQ4aTdOR3NWcm1oaWVGbUhRRzJkck90"
//     },
//     "data": {
//       "grant_type": "client_credentials",
//       "scope": "product.compact"
//     }
//   }

//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });




var list = $("#shoppingList")
console.log(list)
var settings2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.kroger.com/v1/products?filter.brand=Kroger&filter.term=chicken&filter.locationId=01400943&filter.limit=1",
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ3aGF0c2ZvcmRpbm5lcnRvbmlnaHQtZGIwZDliMzQ2MmYzYmM5ZWRmZWYwNjkyNDIxMThlMDU0NzA0ODE2MDgyMTA2NTgxNDMxIiwiZXhwIjoxNjYwNjEyODQ3LCJpYXQiOjE2NjA2MTEwNDIsImlzcyI6ImFwaS5rcm9nZXIuY29tIiwic3ViIjoiYTMwNmM3NGItYzM1ZC01MjNmLWFmNDgtN2U5YWYyMzE1MGIwIiwic2NvcGUiOiJwcm9kdWN0LmNvbXBhY3QiLCJhdXRoQXQiOjE2NjA2MTEwNDc4NzA1MTA4NzksImF6cCI6IndoYXRzZm9yZGlubmVydG9uaWdodC1kYjBkOWIzNDYyZjNiYzllZGZlZjA2OTI0MjExOGUwNTQ3MDQ4MTYwODIxMDY1ODE0MzEifQ.N-xkZQdh1kZQkuVnJF3Jb7qBBrhPFar6DGIVGzNsE-XYoh4tSwlLZQ2Yb2liD1OsoLBju_iF2zlQsUXQeYIDSdPSZVbNMBDoZFiXikCtTGU8fOhvezMvKLLHZ97K7IYsexaNHuXk4U85xXNZxt82Azq-Z2JEDNoZHKRcq3fDjmtkcj166RNQh97tmiybi7j1LyqtJwc_8gCSdelWy1JQoM0fF3NXEtXDJIL0GSBEC5Z1qDoyHK5xBWaMWOH5dFMbb83IhKEywTQRZ-y4hMrqrQhOxkh42UJxM_IaNxi8kEWFRJYowEctZAPAyWDeW8wGZCD16r-5bC8h_Tnm-8p30Q"
    }
  }
  
  $.ajax(settings2).done(function (response) {
    console.log(response);
  })
  .then(function(data2){
    var price = data2.data[0].items[0].price.regular
    console.log(price)
    console.log(list)
    var item = document.createElement('li')
    item.textContent = "$ " + price
    console.log(item)
    $(item).appendTo(list)
    
  })
 