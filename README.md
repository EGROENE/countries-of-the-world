# countries-of-the-world
This is a personal project I decided to work on, with the goal of practicing my JavaScript skills. I am using the Rest Countries API to retrieve data on the countries in the world. 

On the homepage, I display a card for each country, which gives basic information on a particular country, & which links to a separate page for the country, where there is even more information. On the homepage, the user can search for countries based on their names, region, subregion, capital, population, currencies, & languages. There is also a filter function that displays on or removes from the homepage, countries that are categorized under a particular region. By default, all countries display, so all boxes are checked in the filter, but the user can also uncheck a region filter to remove from the DOM the countries that are in that region, & vice versa. After the DOM is updated, the countries automatically display again in alphabetical order based on their names (some names begin with letters that are not in the English alphabet; these display towards the end of the page).

On each country's page, I set the background to a random image of the country, based on a dynamic search on unsplash.com. In addition to further info on the country, I provide links to the pages of the countries that border the country.

Once I finish the homepage & each country's page, I plan to add a quiz game to the site, which tests the user's knowledge on random facts of random countries.

At any time, the user may toggle between light & dark display modes. These changes are stored in the user's browser's local storage, so they will be remembered when the user opens the site again, even after closing the browser & opening the site again in the future.
