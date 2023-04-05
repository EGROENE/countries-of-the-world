/* Everything is put into one function so that this function can be called in a setTimeout function, which allows for the retrieval of data from the API & the consequent populating of the homepage. */

const addFilterFunctionality = () => {
  // Get HTML Collection of countries displayed on homepage:
  let countriesInDOM;
  let countriesInDOMArray;
  const getDOMElems = () => {
    countriesInDOM = document.getElementById(
      "all-countries-container"
    ).children;

    // Create array of all displayed countries:
    countriesInDOMArray = [...countriesInDOM];
    return countriesInDOMArray;
  };
  getDOMElems();

  // Function to create array of all regions of all countries in DOM:
  let allRegionsOfAllCountriesInDOM;
  const getAllRegionsOfAllCountriesInDOM = () => {
    allRegionsOfAllCountriesInDOM = countriesInDOMArray.map(
      (country) => country.dataset.region
    );
  };
  getAllRegionsOfAllCountriesInDOM();

  // Create array of unique country regions:
  let regionsInDOMArray = [];
  for (let country of countriesInDOMArray) {
    if (!regionsInDOMArray.includes(country.dataset.region)) {
      regionsInDOMArray.push(country.dataset.region);
    }
  }

  // Create a dropdown item for every region in regionsInDOMArray:
  const dropdownOptionsArea = document.getElementById("dropdown-content");
  for (let region of regionsInDOMArray) {
    dropdownOptionsArea.innerHTML +=
      "<div data-region='" +
      region +
      "'><span>" +
      region +
      "<span id='region-tally-" +
      region +
      "'>" +
      "</span>" +
      "</span><input id='" +
      region +
      "' type='checkbox' checked></input></div>";
  }

  // Function for when the user clicks on the button, toggle between hiding and showing the dropdown content:
  const showFiltersBtn = document.getElementById("show-filters-btn");
  let chevron = document.querySelector("#show-filters-btn i");
  function showFilterOptions() {
    if (dropdownOptionsArea.style.display === "flex") {
      // Change bg color of button:
      showFiltersBtn.style.backgroundColor = "var(--theme-color-one)";
      // ... and its border
      showFiltersBtn.style.border = "2px solid transparent";
      // Add bottom margin to button:
      showFiltersBtn.style.marginBottom = "0";
      // Flip the chevron:
      chevron.style.rotate = "0deg";
      dropdownOptionsArea.style.display = "none";
    } else {
      // Change bg color of button:
      showFiltersBtn.style.backgroundColor = "transparent";
      // ... and its border
      showFiltersBtn.style.border = "2px solid var(--text-color)";
      // Add bottom margin to button:
      showFiltersBtn.style.marginBottom = "3rem";
      // Flip the chevron:
      chevron.style.rotate = "180deg";
      dropdownOptionsArea.style.display = "flex";
    }
  }
  // Add function to show/hide filter options, to button, so when it's clicked, the display toggles:
  showFiltersBtn.addEventListener("click", showFilterOptions);

  // Create array of all filter options (their HTML):
  const dropdownOptionsDOMElems =
    document.getElementById("dropdown-content").children;
  const dropdownOptionsDOMElemsArray = [...dropdownOptionsDOMElems];

  // Get checked filter options into an array:
  let checkedFilters;
  const getCheckedFilters = () => {
    checkedFilters = dropdownOptionsDOMElemsArray.filter(
      (elem) => elem.children[1].checked === true
    );
    return checkedFilters;
  };
  getCheckedFilters();

  // Get region of each checked filter option into an array:
  let checkedFilterRegions;
  const getCheckedFilterRegions = () => {
    checkedFilterRegions = checkedFilters.map(
      (filter) => filter.dataset.region
    );
    return checkedFilterRegions;
  };
  getCheckedFilterRegions();

  // Function to update region tally for each filter option:
  const calcAndDisplayRegionTallies = (region) => {
    // For every unique region in DOM, initialize its tally at zero:
    let regionTally = 0;
    // For every unique region in DOM, increase its tally for every time it occurs in the DOM:
    for (let regionInDOM of allRegionsOfAllCountriesInDOM) {
      if (regionInDOM === region) {
        regionTally++;
      }
    }
    // Append region's tally to its filter option:
    let regionTallyArea = document.getElementById(`region-tally-${region}`);
    regionTallyArea.innerHTML = " (" + regionTally + ")";
  };
  // Call calcRegionTallies for every country in DOM:
  const calcAllRegionTallies = () => {
    for (let region of regionsInDOMArray) {
      calcAndDisplayRegionTallies(region);
    }
  };
  calcAllRegionTallies();

  // Initialize an array that will contain HTML of each country card that has been removed by the filter:
  let removedCountries = [];

  // Function to update the DOM of the homepage when removing/re-adding country cards w/ the filter:
  const updateDOMAfterFiltering = () => {
    // Delete results message of any current search:
    const resultsMessage = document.getElementById("results-message");
    resultsMessage.textContent = "";
    // Display all countries in DOM if user changes any filter:
    for (let country of countriesInDOMArray) {
      country.style.display = "flex";
    }

    getCheckedFilters();
    getCheckedFilterRegions();

    // Get countries' DOM container (their parent):
    const countriesDOMContainer = document.getElementById(
      "all-countries-container"
    );

    // Remove from DOM:
    for (let country of countriesInDOMArray) {
      // If a country's region is not in the checked filters' regions, push it to array containing removed countries, then remove it from DOM:
      if (!checkedFilterRegions.includes(country.dataset.region)) {
        removedCountries.push(country);
        countriesDOMContainer.removeChild(country);
        // Get updated DOM elements (after certain country has been removed):
        getDOMElems();
      }
    }

    // Add back to DOM:
    for (let country of removedCountries) {
      // If a country's region is in the checked filters' regions, remove country from removed countries array, then re-add it to DOM:
      if (checkedFilterRegions.includes(country.dataset.region)) {
        // Update removed countries array, in that, after the checked filter regions array is updated, the removed countries array contains only the countries whose regions are not inside the checked filter regions array.
        removedCountries = removedCountries.filter(
          (country) => !checkedFilterRegions.includes(country.dataset.region)
        );
        // Re-add the previously removed country back to the homepage:
        countriesDOMContainer.appendChild(country);
        getDOMElems();
      }
    }
    // Sort countries alphabetically, then display them again on homepage:
    countriesInDOMArray
      .sort(function (a, b) {
        if (a.dataset.commonName < b.dataset.commonName) {
          return -1;
        }
        if (a.dataset.commonName > b.dataset.commonName) {
          return 1;
        }
        return 0;
      })
      .forEach((country) => {
        countriesDOMContainer.appendChild(country);
      });
  };

  // Add updateCheckedRegionsArray event listener for each checkbox:
  for (let filterOption of dropdownOptionsDOMElemsArray) {
    filterOption.children[1].addEventListener(
      "change",
      updateDOMAfterFiltering
    );
  }
};
// Give API time to display country cards:
setTimeout(addFilterFunctionality, 3000);
