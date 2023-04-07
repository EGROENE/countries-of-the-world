// Access area on country page where its data should display:
const countryDataContainer = document.getElementById(
  "country-page-main-container"
);

// Get name of country on html page:
const countryName = document.title;
console.log(countryName);

// Search API by countryName, return object:
const searchAPIByCountryName = `https://restcountries.com/v3.1/name/${countryName}`;
async function getCountry() {
  const response = await fetch(searchAPIByCountryName);
  let countryDataObject = await response.json();
  country = countryDataObject[0];
  console.log(country);

  // Set BG image for country:
  // Maybe try 'images of' country.name.common
  /* document.body.style.backgroundImage =
    'url("https://source.unsplash.com/1900x600/?' +
    country.name.common.toLowerCase().replace(/ /g, "-") +
    "-" +
    country.continents.toString() +
    '")'; */
  if (country.altSpellings.length > 1) {
    document.body.style.backgroundImage =
      'url("https://source.unsplash.com/1900x600/?' +
      country.altSpellings[1].toLowerCase().replace(/ /g, "-") +
      " " +
      country.name.common.toLowerCase() +
      " " +
      country.continents.toString() +
      '")';
  } else {
    document.body.style.backgroundImage =
      'url("https://source.unsplash.com/1900x600/?' +
      country.name.common.toLowerCase() +
      '")';
  }

  /* if (
    countriesWithAccurateUnsplashImages.includes(
      country.name.common.toLowerCase.replace(/ /g, "-")
    )
  ) {
    document.body.style.backgroundImage =
      'url("https://source.unsplash.com/1900x600/?' +
      country.name.common.toLowerCase() +
      '")';
  } else {

  } */

  let nativeNames = "";
  if (country.name.nativeName) {
    nativeNames = Object.values(country.name.nativeName);
    nativeNames = nativeNames.filter(
      (nativeName) => nativeName.common !== country.name.common
    );
    console.log(nativeNames);
    if (nativeNames.length >= 1) {
      nativeNames =
        "<p>" +
        nativeNames.map((nativeName) => nativeName.common).join(" | ") +
        "</p>";
    }
  }

  let demonyms = "<p>Demonyms: <span>NONE</span></p>";
  let maleDemonym;
  let femaleDemonym;
  if (country.demonyms) {
    demonyms = Object.values(country.demonyms)[0];
    demonyms = Object.values(demonyms);
    maleDemonym = demonyms[0];
    femaleDemonym = demonyms[1];
    demonyms =
      "<p>Demonyms: <span> " +
      femaleDemonym +
      " (f), " +
      maleDemonym +
      " (m)</span></p>";
    console.log(demonyms);
  }

  // Set country's currency dataset value:
  let currencies = "<p>Currency: <span>NONE</span></p>";
  if (country.currencies) {
    currencies = Object.values(country.currencies);
    currencies = currencies.map((currency) => currency.name);
    console.log(currencies);
    if (currencies.length > 1) {
      currencies =
        "<p>Currencies: " + "<span>" + currencies.join(", ") + "</span></p>";
    } else {
      currencies = "<p>Currency: " + "<span>" + currencies + "</span></p>";
    }
  }
  console.log(currencies);

  let subregion = "NONE";
  if (country.subregion) {
    subregion = country.subregion;
  }

  let capital = "Capital: <span>NONE</span>";
  if (country.capital) {
    capital = Object.values(country.capital);
    if (capital.length > 1) {
      capital = "<p>Capitals: " + capital.join(", ") + "</p>";
    } else {
      capital = "<p>Capital: " + "<span>" + capital + "</span>" + "</p>";
    }
  }

  let languages = "<p>Languages: <span>NONE</span></p>";
  if (country.languages) {
    languages = Object.values(country.languages);
    if (languages.length > 1) {
      languages =
        "<p>Languages: " + "<span>" + languages.join(", ") + "</span></p>";
    } else if (languages.length === 1) {
      languages = "<p>Language: " + "<span>" + languages + "</span>" + "</p>";
    }
  }

  // Get link to country's Google Maps page:
  let googleMapsLink = Object.values(country.maps)[0];

  // Get bordering countries:
  let borderCountries = country.borders;

  // Array containing search queries:
  let searchQueries = [];

  // Function that searches border countries by their code:
  let searchBorderCountries;
  const searchBorderCountriesFunction = (borderCountryCode) => {
    searchBorderCountries =
      "https://restcountries.com/v3.1/alpha/" + borderCountryCode;
    searchQueries.push(searchBorderCountries);
    console.log(searchQueries);
  };

  async function getBorders() {
    let borderCountriesList = document.getElementById("border-countries-list");
    if (borderCountries) {
      // Call search for each border country:
      for (let borderCountryCode of borderCountries) {
        searchBorderCountriesFunction(borderCountryCode);
      }

      // For every query...
      let borderCountryDataObjects = [];
      for (let query of searchQueries) {
        let responseBorders = await fetch(query);
        let borderCountryDataObject = await responseBorders.json();
        borderCountryDataObjects.push(borderCountryDataObject);
        borderCountryDataObjects = borderCountryDataObjects.flat();
      }

      // Populate bordering countries:
      for (let borderCountry of borderCountryDataObjects) {
        borderCountriesList.innerHTML +=
          "<a class='border-country-link' href='./" +
          borderCountry.name.common.toLowerCase().replace(/\s/g, "-") +
          ".html' title='Learn about " +
          borderCountry.name.common +
          "!'>" +
          borderCountry.name.common +
          "</a>";
      }
    } else {
      borderCountriesList.innerHTML += "<p id='no-borders'>None</p>";
    }
  }

  // Populate country page:
  countryDataContainer.innerHTML +=
    "<div id='country-page-headers-container'>" +
    "<header>" +
    country.name.common.toUpperCase() +
    "</header>" +
    nativeNames +
    "</div>" +
    "<div id='country-body-container'>" +
    "<div id='flag-info-container'>" +
    "<img src=" +
    country.flags.png +
    " alt='" +
    country.flags.alt +
    "'>" +
    "<div id='country-info-container'>" +
    "<div id='country-facts-container'>" +
    "<p>Region: " +
    "<span>" +
    country.region +
    "</span>" +
    "</p>" +
    "<p>" +
    "Subregion: " +
    "<span>" +
    subregion +
    "</span>" +
    "</p>" +
    "<p>Continent(s): " +
    "<span>" +
    country.continents.toString() +
    "</span>" +
    "</p>" +
    "<p>" +
    capital +
    "</p>" +
    "<p>Population: <span>" +
    country.population.toLocaleString() +
    "</span></p>" +
    demonyms +
    languages +
    currencies +
    "<a href=" +
    googleMapsLink +
    ' target="_blank">View on Google Maps</a>' +
    "</div>" +
    "</div>" +
    "</div>" +
    "<div id='border-countries-container'>" +
    "<header>Neighboring Countries: </header>" +
    "<div id='border-countries-list'></div>" +
    "</div>" +
    "</div>";
  getBorders();
}
getCountry();
