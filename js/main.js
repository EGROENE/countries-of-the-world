// Get info from API, populate site:
const apiURL = "https://restcountries.com/v3.1/all";

async function getCountries() {
  // Call API & convert to json:
  const response = await fetch(apiURL);
  let allCountriesArray = await response.json();

  // Add data from API to mainArray, which will be used to populate homepage:
  let mainArray = [];
  //for (let i = 0; i < allCountriesArray.length; i++) {
  for (let i = 0; i < 100; i++) {
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

  for (let country of mainArray) {
    // Set country's currency dataset value:
    let currencyDataset = "NONE";
    if (country.currencies) {
      let currencies = Object.values(country.currencies);
      let currencyNames = currencies.map((currency) =>
        currency.name.toLowerCase()
      );
      currencyDataset = currencyNames.map((currencyName) =>
        currencyName.replace(/\s/g, "-")
      );
    }

    let subregion = "NONE";
    if (country.subregion) {
      subregion = country.subregion;
    }

    let capital = ["NONE"];
    if (country.capital) {
      capital = country.capital;
    }

    // Set country's languages dataset value:
    let languagesDataset = "NONE";
    if (country.languages) {
      let languages = Object.values(country.languages);
      languages = languages.map((language) => language.toLowerCase());
      languagesDataset = languages.join("-");
    }

    // Populate homepage:
    let allCountriesArea = document.getElementById("all-countries-container");
    allCountriesArea.innerHTML +=
      '<a href="./country-pages/' +
      country.name.common.toLowerCase().replace(/\s/g, "-") +
      '.html" class="country-card" title="Click to learn more about ' +
      country.name.common +
      '!" data-name=' +
      country.name.common.toLowerCase() +
      " data-region=" +
      country.region.toLowerCase() +
      " data-subregion=" +
      subregion.toLowerCase() +
      " data-capital=" +
      capital.toString().toLowerCase() +
      " data-population=" +
      String(country.population) +
      " data-currencies=" +
      currencyDataset +
      " data-languages=" +
      languagesDataset +
      ">" +
      "<div class='card-flag-container'>" +
      "<img src='" +
      country.flags.png +
      "' alt='" +
      country.flags.alt +
      "'>" +
      "</div>" +
      "<div class='country-card-text-container'>" +
      "<header>" +
      country.name.common +
      "</header>" +
      "<p>Region: " +
      country.region +
      "</p>" +
      "<p>Subregion: " +
      subregion +
      "</p>" +
      "<p>Population: " +
      country.population.toLocaleString() +
      "</p>" +
      "<p>Capital(s): " +
      capital.join(", ") +
      "</p>" +
      "</div>" +
      "</a>";
  }
}
getCountries();
