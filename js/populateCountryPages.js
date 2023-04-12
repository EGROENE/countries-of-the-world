// Access area on country page where its data should display:
const countryDataContainer = document.getElementById(
  "country-page-main-container"
);

// Get name of country on html page:
const countryName = document.title;

// Search API by countryName, return object:
const searchAPIByCountryName = `https://restcountries.com/v3.1/name/${countryName}`;
async function getCountry() {
  const response = await fetch(searchAPIByCountryName);
  let countryDataObject = await response.json();
  for (let element of countryDataObject) {
    // Set country to equal an element returned from API, based on search of API by the doc title (countryName).
    // If DR Congo, check if official name includes countryName.
    // Else, check if countryName includes the common name.
    if (countryName === "Democratic Republic of the Congo") {
      if (element.name.official.includes(countryName)) {
        country = element;
      }
    } else {
      if (countryName.includes(element.name.common)) {
        country = element;
      }
    }
  }
  console.log(country);

  // Set BG image for country:
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

  // Get country name for header on country pages:
  let countryPageHeader;
  // If DR Congo is the country, set its official name as the header, not its common name:
  if (country.name.common === "DR Congo") {
    countryPageHeader =
      "<header>" + country.name.official.toUpperCase() + "</header>";
  } else {
    countryPageHeader =
      "<header>" + country.name.common.toUpperCase() + "</header>";
  }

  // Get native names:
  let nativeNames;
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

  // Get demonyms:
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
  }

  // Get currency/ies:
  let currencies = "<p>Currency: <span>NONE</span></p>";
  if (country.currencies) {
    currencies = Object.values(country.currencies);
    currencies = currencies.map((currency) => currency.name);
    if (currencies.length > 1) {
      currencies =
        "<p>Currencies: " + "<span>" + currencies.join(", ") + "</span></p>";
    } else {
      currencies = "<p>Currency: " + "<span>" + currencies + "</span></p>";
    }
  }

  // Get country's timezones:
  let timezones;
  if (country.timezones.length === 1) {
    timezones =
      "<p>Timezone: <span>" + country.timezones.toString() + "</span></p>";
  } else {
    timezones =
      "<p>Timezones: <span>" + country.timezones.join(", ") + "</span></p>";
  }

  // Get country's driving side:
  let drivingSide = "NO ROADS";
  if (country.car.side) {
    drivingSide = "<p>Driving Side: <span>" + country.car.side + "</span></p>";
  }

  // Get continent(s):
  let continents;
  if (country.continents.length === 1) {
    continents =
      "<p>Continent: <span>" + country.continents.toString() + "</span></p>";
  } else {
    continents =
      "<p>Continents: <span>" + country.continents.join(", ") + "</span></p>";
  }

  // Get region:
  let region = "<p>Region: <span>" + country.region + "</span><p>";

  // Get subregion:
  let subregion = "<p>Subregion: <span>NONE</span></p>";
  if (country.subregion) {
    subregion = "<p>Subregion: <span>" + country.subregion + "</span></p>";
  }

  // Get capital(s):
  let capital = "<p>Capital: <span>NONE</span></p>";
  if (country.capital) {
    capital = Object.values(country.capital);
    if (capital.length > 1) {
      capital = "<p>Capitals: <span>" + capital.join(", ") + "</span></p>";
    } else {
      capital = "<p>Capital: <span>" + capital + "</span></p>";
    }
  }

  // Get language(s):
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
  };

  async function getBorders() {
    let borderCountriesContainerHeader = document.querySelector(
      "#border-countries-container header"
    );
    let borderCountriesList = document.getElementById("border-countries-list");
    if (borderCountries) {
      if (borderCountries.length > 1) {
        borderCountriesContainerHeader.innerHTML =
          "<header>Neighboring Countries: </header>";
        if (screen.width <= 414 && screen.width >= 360) {
          borderCountriesList.style.justifyContent = "space-between";
        }
      } else {
        borderCountriesContainerHeader.innerHTML =
          "<header>Neighboring Country: </header>";
        if (screen.width <= 414 && screen.width > 0) {
          borderCountriesList.style.justifyContent = "center";
        }
      }
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
    countryPageHeader +
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
    region +
    subregion +
    continents +
    capital +
    "<p>Population: <span>" +
    country.population.toLocaleString() +
    "</span></p>" +
    demonyms +
    languages +
    currencies +
    timezones +
    drivingSide +
    "<a href=" +
    googleMapsLink +
    ' target="_blank">View on Google Maps</a>' +
    "</div>" +
    "</div>" +
    "</div>" +
    "<div id='border-countries-container'><header>Neighboring Countries: </header>" +
    "<div id='border-countries-list'></div>" +
    "</div>" +
    "</div>";
  getBorders();
}
getCountry();
