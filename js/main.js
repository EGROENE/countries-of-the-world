// Toggle light/dark theme:
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

const enableDarkMode = () => {
  // add dark class to body
  document.body.classList.add("dark-mode");
  // update dark mode in localStorage
  localStorage.setItem("darkMode", "enabled");
  // 'check' the slider:
  document.getElementById("dark-mode-toggle").checked = true;
  // make sun logo more opaque:
  sun.style.opacity = "0.4";
  // remove moon's opacity:
  moon.style.opacity = "1";
};

const disableDarkMode = () => {
  // remove dark class to body
  document.body.classList.remove("dark-mode");
  // update dark mode in localStorage
  localStorage.setItem("darkMode", "disabled");
  // 'uncheck' the slider:
  document.getElementById("dark-mode-toggle").checked = false;
  // make moon logo more opaque:
  moon.style.opacity = "0.4";
  // remove sun's opacity:
  sun.style.opacity = "1";
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Get info from API, populate site:
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

  for (let country of mainArray) {
    // Set country's currency dataset value:
    let currencies = Object.values(country.currencies);
    let currencyNames = currencies.map((currency) =>
      currency.name.toLowerCase()
    );
    let currencyDataset = currencyNames.map((currencyName) =>
      currencyName.replace(/\s/g, "-")
    );

    // Set country's languages dataset value:
    let languages = Object.values(country.languages);
    languages = languages.map((language) => language.toLowerCase());
    let languagesDataset = languages.join("-");

    // Populate homepage:
    let allCountriesArea = document.getElementById("all-countries-container");
    allCountriesArea.innerHTML +=
      '<a href="./country-pages/' +
      country.name.common.toLowerCase() +
      '.html" class="country-card" title="Click to learn more about ' +
      country.name.common +
      '!" data-name=' +
      country.name.common.toLowerCase() +
      " data-region=" +
      country.region.toLowerCase() +
      " data-capital=" +
      country.capital.toString().toLowerCase() +
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
      "<p>Population: " +
      country.population.toLocaleString() +
      "</p>" +
      "<p>Capital: " +
      country.capital.toString() +
      "</p>" +
      "</div>" +
      "</a>";
  }
}
getCountries();
