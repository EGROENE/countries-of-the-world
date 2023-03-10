// Link this document in index.html below link to main.js
const searchInput = document.getElementById("search-input");
const clearSearchboxButton = document.getElementById("clear-searchbox");

searchInput.addEventListener("keyup", (e) => {
  let value = e.target.value.trim().toLowerCase();

  const displayedCountries = document.querySelectorAll(".country-card");

  let totalResults = 0;

  const resultsMessage = document.getElementById("results-message");

  if (value && value.trim().length > 0) {
    for (let country of displayedCountries) {
      clearSearchboxButton.addEventListener("click", () => {
        totalResults = 0;
        searchInput.value = "";
        country.style.display = "flex";
        resultsMessage.textContent = "";
      });
      if (
        country.dataset.name.toLowerCase().trim().includes(value) ||
        country.dataset.region.toLowerCase().trim().includes(value) ||
        country.dataset.capital
          .toString()
          .toLowerCase()
          .trim()
          .includes(value) ||
        country.dataset.population.includes(value) ||
        country.dataset.currencies.includes(value) ||
        country.dataset.languages.includes(value)
      ) {
        // display cards that pass above criteria
        country.style.display = "flex";
        totalResults += 1;
        if (totalResults === 1) {
          resultsMessage.textContent = `Your search yielded ${totalResults} result.`;
        } else if (totalResults > 1) {
          resultsMessage.textContent = `Your search yielded ${totalResults} results.`;
        }
      } else {
        totalResults += 0;
        country.style.display = "none";
        if (totalResults === 0) {
          resultsMessage.textContent = `Sorry, we couldn't find what you're looking for`;
        }
      }
    }
  } else {
    totalResults = 0;
    resultsMessage.textContent = "";
    for (let country of displayedCountries) {
      country.style.display = "flex";
    }
  }
});
