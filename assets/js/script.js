var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://cors-anywhere.herokuapp.com/https://api.kroger.com/v1/connect/oauth2/token",
    "method": "POST",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic d2hhdHNmb3JkaW5uZXJ0b25pZ2h0LWRiMGQ5YjM0NjJmM2JjOWVkZmVmMDY5MjQyMTE4ZTA1NDcwNDgxNjA4MjEwNjU4MTQzMTpjN0xkNnB2WFF3alNJa0ZvMVQ4aTdOR3NWcm1oaWVGbUhRRzJkck90"
    },
    "data": {
      "grant_type": "client_credentials",
      "scope": "product.compact"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });



var shoppinglist = document.getElementById("#shoppinglist")
var settings2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.kroger.com/v1/products?filter.brand=Kroger&filter.term=chicken&filter.locationId=01400943&filter.limit=1",
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ3aGF0c2ZvcmRpbm5lcnRvbmlnaHQtZGIwZDliMzQ2MmYzYmM5ZWRmZWYwNjkyNDIxMThlMDU0NzA0ODE2MDgyMTA2NTgxNDMxIiwiZXhwIjoxNjYwNjA5MTY5LCJpYXQiOjE2NjA2MDczNjQsImlzcyI6ImFwaS5rcm9nZXIuY29tIiwic3ViIjoiYTMwNmM3NGItYzM1ZC01MjNmLWFmNDgtN2U5YWYyMzE1MGIwIiwic2NvcGUiOiJwcm9kdWN0LmNvbXBhY3QiLCJhdXRoQXQiOjE2NjA2MDczNjkzMjk2MzI2MzgsImF6cCI6IndoYXRzZm9yZGlubmVydG9uaWdodC1kYjBkOWIzNDYyZjNiYzllZGZlZjA2OTI0MjExOGUwNTQ3MDQ4MTYwODIxMDY1ODE0MzEifQ.v62zmjFF3jeCiZ05jP73CJmVVA2JIuR3ASkJlitVYpkO4ahnllvnqsCeQb9GqXaenKoPQza1jimK-SpGvHIgXrXxz4aTOC-XS4ulbZL6o-RSeCx_Z7xybTs6VKl7KJB_-wjUsEeWMPfr5JYP0KTsJ6yBVKgpVWdJMeljVNhbdnUH-FSH_8MCxNhBHLIrN8IQG8aHNIzaTCazKWGyUNc06blmKhAGhDczD_4IFk6cNoBL8vY8XU7AcP7INAWzLgHSpL8wtkWhnRPpgD870NjXKUykSlLG37L3vYrEa6M0YM1_vw89aCmyJRoFyCm-SIfQ1zM-_laXiknK_VXumZpYsQ"
    }
  }
  
  $.ajax(settings2).done(function (response) {
    console.log(response);
  })
  .then(function(data2){
    var price = data2.data[0].items[0].price.regular
    console.log(price)
   
  })
  .then(function(displayprices){
    var list = document.createElement('ul');
    shoppinglist.appendChild(list)

    var item = document.createElement('li')
    list.appendChild(item)

    item.textContent(price);

  })