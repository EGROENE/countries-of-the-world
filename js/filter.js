// Everything is put into one function so that this function can be called in a setTimeout function, which allows for the retrieval of data from the API & the consequent populating of the homepage.

const addFilterFunctionality = () => {
  // Get HTML Collection of countries displayed on homepage:
  // Maybe make this into a function to be called when updating DOM
  let countriesInDOM = document.getElementById(
    "all-countries-container"
  ).children;
  console.log(countriesInDOM);

  // Create array of all displayed countries:
  let countriesInDOMArray = [...countriesInDOM];
  console.log(countriesInDOMArray);

  // Function to alphabetize DOM elements on page by country.name.common:

  // Create array of unique country regions:
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

    const countriesDOMContainer = document.getElementById(
      "all-countries-container"
    );
    console.log(countriesDOMContainer);
    const countriesDOMContainerChildrenArray = Array.from(
      countriesDOMContainer.children
    );
    console.log(countriesDOMContainerChildrenArray);
    // Remove from DOM:
    for (let country of countriesDOMContainerChildrenArray) {
      if (!checkedFilterRegions.includes(country.dataset.region)) {
        console.log(country);
        countriesDOMContainer.removeChild(country);
        console.log(countriesDOMContainer);
        console.log(countriesInDOMArray);
      }
    }
    console.log(countriesDOMContainer);
    console.log(countriesDOMContainer.children);

    // Add back to DOM:

    // Delete from DOM / add to DOM
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
