let capital = ""
let currency = ""
let currencySymbol = ""
let flag = ""
let language = ""
let languageNative = ""
let nameNative = ""
let population = ""
let domain = ""
let country = "germany"


$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
  $('select').formSelect();
});

$.ajax({
  url:
    "https://restcountries.eu/rest/v2/name/" + country,
    
  method: "GET",
}).then(function (response) {
  capital = response[0].capital
  currency = response[0].currencies[0].name
  currencySymbol = response[0].currencies[0].symbol
  flag = response[0].flag
  language = response[0].languages[0].name
  languageNative = response[0].languages[0].nativeName
  nameNative = response[0].nativeName
  population = response[0].population
  domain = response[0].topLevelDomain[0]
  console.log(response)
  console.log(capital)
  console.log(currency)
  console.log(currencySymbol)
  console.log(flag)
  console.log(language)
  console.log(languageNative)
  console.log(nameNative)
  console.log(population)
  console.log(domain)

});