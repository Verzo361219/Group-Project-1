var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.kroger.com/v1/connect/oauth2/token",
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
    console.log(response.access_token);
  });




var list = $("#shoppingList")
console.log(list)
var settings2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.kroger.com/v1/products?filter.brand=Kroger&filter.term=chicken&filter.locationId=01400943&filter.limit=1",
    "method": "GET",
    "headers": {
      "Access-Control-Allow-Origin": https://verzo361219.github.io/Group-Project-1/
      "Accept": "application/json",
      "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ3aGF0c2ZvcmRpbm5lcnRvbmlnaHQtZGIwZDliMzQ2MmYzYmM5ZWRmZWYwNjkyNDIxMThlMDU0NzA0ODE2MDgyMTA2NTgxNDMxIiwiZXhwIjoxNjYwNjE1NjI1LCJpYXQiOjE2NjA2MTM4MjAsImlzcyI6ImFwaS5rcm9nZXIuY29tIiwic3ViIjoiYTMwNmM3NGItYzM1ZC01MjNmLWFmNDgtN2U5YWYyMzE1MGIwIiwic2NvcGUiOiJwcm9kdWN0LmNvbXBhY3QiLCJhdXRoQXQiOjE2NjA2MTM4MjUxNTc2NTY2ODEsImF6cCI6IndoYXRzZm9yZGlubmVydG9uaWdodC1kYjBkOWIzNDYyZjNiYzllZGZlZjA2OTI0MjExOGUwNTQ3MDQ4MTYwODIxMDY1ODE0MzEifQ.q4e6Ny--XoMl-ZkL-72CI9MlYOR-rL_qOth4XK05ijH6SmWqLDOyIcQa-J9EmLnPH3AG83VFp3_TfFEGIZMJUMoL9HqayfBZVOXzEHaP_N1Mc6qphcTryotciM2uIE2Gvy7x1vBuRgoLQ1pBOjhYBc72DPLqbgDpHWGqLofxxEB_kANli_FF6TsazrfYLJdtWxTdrQOEVcFeuAHSJox4ZuRrao_htJ5VR11lNXAYRfJYNuyw9-neIZnxg6HTBPDvsRNQMWAjkX-OIJ3kaJ5-Y1EpRgegpDxy1UOq_zRLAeYiMgcmwsRMf6U3k1rhSYKa6xnDN3iSdOBEdtm1B6Ceig"
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
 