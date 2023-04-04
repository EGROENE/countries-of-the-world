// Everything is put into one function so that this function can be called in a setTimeout function, which allows for the retrieval of data from the API & the consequent populating of the homepage.

const addFilterFunctionality = () => {
  // Get HTML Collection of countries displayed on homepage:
  // Maybe make this into a function to be called when updating DOM
  let countriesInDOM;
  let countriesInDOMArray;
  const getDOMElems = () => {
    countriesInDOM = document.getElementById(
      "all-countries-container"
    ).children;
    console.log(countriesInDOM);

    // Create array of all displayed countries:
    countriesInDOMArray = [...countriesInDOM];
    console.log(countriesInDOMArray);
    return countriesInDOMArray;
  };
  getDOMElems();

  // Function to alphabetize DOM elements on page by country.name.common:

  // Create array of unique country regions:
  // MAYBE USE A METHOD HERE (filter, map, etc) TO MAKE THIS MORE CONCISE
  let regionsInDOMArray = [];
  for (let country of countriesInDOMArray) {
    if (!regionsInDOMArray.includes(country.dataset.region)) {
      regionsInDOMArray.push(country.dataset.region);
    }
  }
  console.log(regionsInDOMArray);

  // Get total countries inside of DOM that pertain to each region:
  const allRegionsOfDisplayedCountries = countriesInDOMArray.map(
    (country) => country.dataset.region
  );
  console.log(allRegionsOfDisplayedCountries);

  // Create a dropdown item for every region in regionsInDOMArray:
  const dropdownOptionsArea = document.getElementById("dropdown-content");
  for (let region of regionsInDOMArray) {
    dropdownOptionsArea.innerHTML +=
      "<div data-region='" +
      region +
      "'><span>" +
      region +
      "</span><input id='" +
      region +
      "' type='checkbox' checked></input></div>";
  }

  //const checkedFilterOptions = dropdownOptionsDOMElems.map(option => )

  // Function that removes region from array if unchecked:

  // When the user clicks on the button, toggle between hiding and showing the dropdown content
  const showFiltersBtn = document.getElementById("show-filters-btn");
  function showFilterOptions() {
    if (dropdownOptionsArea.style.display === "flex") {
      dropdownOptionsArea.style.display = "none";
    } else {
      dropdownOptionsArea.style.display = "flex";
    }
  }
  showFiltersBtn.addEventListener("click", showFilterOptions);

  // Create array of all options that are checked:
  const dropdownOptionsDOMElems =
    document.getElementById("dropdown-content").children;

  const dropdownOptionsDOMElemsArray = [...dropdownOptionsDOMElems];
  console.log(dropdownOptionsDOMElemsArray);

  // Get checkedFilters into an array:
  let checkedFilters;
  const getCheckedFilters = () => {
    checkedFilters = dropdownOptionsDOMElemsArray.filter(
      (elem) => elem.children[1].checked === true
    );
    console.log(checkedFilters);
    return checkedFilters;
  };
  getCheckedFilters();

  // Get region of each checked filter into an array:
  let checkedFilterRegions;
  const getCheckedFilterRegions = () => {
    checkedFilterRegions = checkedFilters.map(
      (filter) => filter.dataset.region
    );
    console.log(checkedFilterRegions);
    return checkedFilterRegions;
  };
  getCheckedFilterRegions();

  let removedCountries = [];

  // Function to get checked filters & put their regions into an array.
  // Should happen at the same time, so best to put them into a single function, as follows.
  const updateDOMAfterFiltering = () => {
    // Delete anything the user typed into search bar:
    const resultsMessage = document.getElementById("results-message");
    resultsMessage.textContent = "";
    for (let country of countriesInDOMArray) {
      country.style.display = "flex";
    }

    getCheckedFilters();
    getCheckedFilterRegions();

    // Get countries' DOM container (their parent):
    const countriesDOMContainer = document.getElementById(
      "all-countries-container"
    );
    console.log(countriesDOMContainer);

    // Get array of countries in DOM:
    // This can be iterated through & alphabetized

    // Remove from DOM:
    for (let country of countriesInDOMArray) {
      if (!checkedFilterRegions.includes(country.dataset.region)) {
        removedCountries.push(country);
        countriesDOMContainer.removeChild(country);
        getDOMElems();
      }
    }
    console.log(removedCountries);
    console.log(checkedFilterRegions);

    // Add back to DOM:
    // Collecting removed cards will likely be necessary. Then, this array will be used to add these back to the DOM.
    for (let country of removedCountries) {
      if (checkedFilterRegions.includes(country.dataset.region)) {
        removedCountries = removedCountries.filter(
          (country) => !checkedFilterRegions.includes(country.dataset.region)
        );
        countriesDOMContainer.appendChild(country);
        console.log(countriesInDOMArray);
        getDOMElems();
      }
    }
    console.log(removedCountries);
    console.log(countriesInDOMArray);
    // Sort countries alphabetically before displaying them again on homepage:
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
      .forEach(function (country) {
        countriesDOMContainer.appendChild(country);
      });
    console.log(countriesInDOMArray);

    // Auto alphabetize DOM elements upon change of any filter (call a yet-to-be-defined function to do this, in this function)
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
