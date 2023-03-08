const apiURL = "https://restcountries.com/v3.1/all";

async function getCountries() {
  // Call API & convert to json:
  const response = await fetch(apiURL);
  let allCountriesArray = await response.json();

  // Add data from API to mainArray, which will be used to populate homepage:
  let mainArray = [];
  //for (let i = 0; i < allCountriesArray.length; i++) {
  for (let i = 0; i < 5; i++) {
    mainArray.push(allCountriesArray[i]);
  }
  // Sort countries alphabetically before displaying on homepage:
  mainArray.sort(function (a, b) {
    if (a.name.common < b.name.common) {
      return -1;
    }
    if (a.name.common > b.name.common) {
      return 1;
    }
    return 0;
  });

  //let mainArray = allCountriesArray.map((country) => country);
  console.log(mainArray);

  // Populate homepage:
  let allCountriesArea = document.getElementById("all-countries-container");
  for (let country of mainArray) {
    allCountriesArea.innerHTML +=
      '<a href="./country-pages/' +
      country.name.common.toLowerCase() +
      '.html" class="country-card">' +
      "<div class='card-flag-container'>" +
      "<img src='" +
      country.flags.png +
      "' alt='" +
      country.flags.alt +
      "'>" +
      "</div>" +
      "<header>" +
      country.name.common +
      "</header>" +
      "</a>";
  }
}
getCountries();
