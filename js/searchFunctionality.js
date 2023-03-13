// Link this document in index.html below link to main.js
const searchInput = document.getElementById("search-input");
const clearSearchboxButton = document.getElementById("clear-searchbox");

searchInput.addEventListener("keyup", (e) => {
  let value = e.target.value;
  if (value[value.length - 1] === " " && value[value.length - 2] === " ") {
    value = value.slice(0, -1);
    searchInput.value = value;
  }
  value.toLowerCase();

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
        country.dataset.name
          .toLowerCase()
          .replace(/-/g, " ")
          .trim()
          .includes(value.trim()) ||
        country.dataset.region.toLowerCase().trim().includes(value.trim()) ||
        country.dataset.subregion.toLowerCase().trim().includes(value.trim()) ||
        country.dataset.capital
          .toString()
          .replace(/-/g, " ")
          .trim()
          .includes(value.trim()) ||
        country.dataset.population.includes(value.trim()) ||
        country.dataset.currencies.replace(/-/g, " ").includes(value.trim()) ||
        country.dataset.languages
          .toLowerCase()
          .replace(/-/g, " ")
          .trim()
          .includes(value.trim())
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
          resultsMessage.textContent = `Sorry, we couldn't find what you're looking for.`;
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
