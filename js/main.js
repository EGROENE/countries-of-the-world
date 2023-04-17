// Get info from API, populate site:
const apiURL = "https://restcountries.com/v3.1/all";

async function getCountries() {
  // Call API & convert to json:
  const response = await fetch(apiURL);
  let allCountriesArray = await response.json();

  // Add data from API to mainArray, which will be used to populate homepage:
  let mainArray = [];
  for (let i = 0; i < allCountriesArray.length; i++) {
    //for (let i = 0; i < 4; i++) {
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
    // Get native names into array, then use that array to add all native names to data-native-names (if country has native names):
    let nativeNamesDataset = "NONE";
    let nativeNamesLowercase;
    if (country.name.nativeName) {
      // Get array of objects, each object pertaining to country's native name in a certain language:
      let namesInLanguage = Object.values(country.name.nativeName);
      // Initialize array that will contain array(s) of native names (w/o keys that are present in namesInLanguage):
      let nativeNames = [];
      // Initialize variable that will be the flattened version of nativeNames:
      let nativeNamesFlat;
      // For every name in namesInLanguage, push its flattened values to nativeNames, then assign nativeNamesFlat the value of nativeNames.flat():
      for (let name of namesInLanguage) {
        nativeNames.push(Object.values(name).flat());
        nativeNamesFlat = nativeNames.flat();
      }
      // Create an array of all the names in nativeNamesFlat in lowercase form:
      nativeNamesLowercase = nativeNamesFlat.map((name) => name.toLowerCase());
      // Assign nativeNamesDataset to an array of the values of nativeNamesLowerCase, in which all spaces have been replaced by hyphens:
      nativeNamesDataset = nativeNamesLowercase.map((name) =>
        name.replace(/\s/g, "-")
      );
      // Convert array to a string, joining elements w/ a hyphen:
      nativeNamesDataset = nativeNamesDataset.join("-");
    }

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

    let capitalDataset = "NONE";
    let capital = ["NONE"];
    if (country.capital) {
      capital = country.capital;
      capitalDataset = capital.map((capital) => capital.toLowerCase());
      capitalDataset = capitalDataset.join("-").replace(/\s/g, "-");
      capital = capital.join(", ");
    }

    // Set country's languages dataset value:
    let languagesDataset = "NONE";
    let languages = "NONE";
    if (country.languages) {
      languages = Object.values(country.languages);
      languagesDataset = languages.map((language) => language.toLowerCase());
      languagesDataset = languagesDataset.join("-").replace(/\s/g, "-");
      languages = languages.join(", ");
    }

    // If names sound better with 'the' in front of them, add 'the' to these countries' link titles. Else, link title is country's common name.
    let linkTitle = "Click to learn more about " + country.name.common;
    const countriesThatSoundBetterWithTheBeforeName = [
      "caribbean-netherlands",
      "isle-of-man",
      "united-kingdom",
      "netherlands",
      "bahamas",
      "republic-of-the-congo",
      "dr-congo",
      "british-indian-ocean-territory",
      "british-virgin-islands",
      "central-african-republic",
      "french-southern-and-antarctic-lands",
      "marshall-islands",
      "maldives",
      "northern-mariana-islands",
      "pitcairn-islands",
      "united-states",
      "united-states-minor-outlying-islands",
      "united-states-virgin-islands",
      "åland-islands",
    ];
    if (
      countriesThatSoundBetterWithTheBeforeName.includes(
        country.name.common
          .toLowerCase()
          .replace(/[$,]/g, "")
          .replace(/\s/g, "-")
      )
    )
      if (country.name.common === "DR Congo") {
        linkTitle = "Click to learn more about the " + country.name.official;
      } else {
        linkTitle = "Click to learn more about the " + country.name.common;
      }

    // Populate homepage:
    let allCountriesArea = document.getElementById("all-countries-container");
    allCountriesArea.innerHTML +=
      '<a href="./country-pages/' +
      country.name.common
        .toLowerCase()
        .replace(/[$,]/g, "")
        .replace(/\s/g, "-") +
      '.html" class="country-card" title="' +
      linkTitle +
      '!" data-full-name=' +
      country.name.official.toLowerCase().replace(/\s/g, "-") +
      " data-common-name=" +
      country.name.common.toLowerCase().replace(/\s/g, "-") +
      " data-native-names=" +
      nativeNamesDataset +
      " data-region=" +
      country.region.toLowerCase().replace(/\s/g, "-") +
      " data-subregion=" +
      subregion.toLowerCase().replace(/\s/g, "-") +
      " data-capital=" +
      capitalDataset +
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
      "<span>" +
      country.region +
      "</span>" +
      "</p>" +
      "<p>Subregion: " +
      "<span>" +
      subregion +
      "</span>" +
      "</p>" +
      "<p>Population: " +
      "<span>" +
      country.population.toLocaleString() +
      "</span>" +
      "</p>" +
      "<p>Capital(s): " +
      "<span>" +
      capital.toString() +
      "</span>" +
      "</p>" +
      "<p>Language(s): " +
      "<span>" +
      languages +
      "</span>" +
      "</p>" +
      "</div>" +
      "</a>";
  }

  // Add EL to scroll-to-top button. This EL's callback function scrolls to the top of the page when the button is clicked:
  const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  // Function to make 'back to top' btn appear:
  const displayScrollToTopBtn = () => {
    if (
      //document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      scrollToTopBtn.style.display = "inline-block";
      scrollToTopBtn.style.position = "fixed";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };
  // Call function to display scroll-to-top button:
  window.onscroll = function () {
    displayScrollToTopBtn();
  };

  let searchContainer = document.getElementById("search-container");
  searchContainer.innerHTML +=
    '<div id="search-box">' +
    '<input id="search-input" type="text" placeholder="Search countries" title="Search by English name, region, subregion, capital, population, currency, or language">' +
    '<i class="fas fa-times" id="clear-searchbox"></i>' +
    "</div>" +
    '<p id="results-message"></p>';

  let filterContainer = document.getElementById("filter-container");
  filterContainer.innerHTML +=
    '<button id="show-filters-btn">Filter by Region<i class="fas fa-chevron-down"></i></button>' +
    '<div id="dropdown-content"></div>';
}
getCountries();
