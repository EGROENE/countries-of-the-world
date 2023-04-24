﻿# countries-of-the-world
This is a personal project I worked on with the goal of practicing my JavaScript skills. I am using the Rest Countries API to retrieve data on the countries in the world. I put everything together using HTML, CSS, & vanilla JS.

On the homepage, I display a card for each country, which gives basic information on a particular country, & which links to a separate page for the country, where there is even more information. As the world is a big place with many countries in it, I did a few things that make the information on the homepage easier to navigate. The user can search for countries based on their names, region, subregion, capital, population, currencies, & languages. I also made it possible for the user to filter the displayed countries by their region. By default, all countries display, so all boxes are checked in the filter, but the user can uncheck a region filter to remove from the DOM the countries that are in that region, & vice versa. Upon page load, or after the DOM is updated by either a search query or the filter functionality, the countries automatically display again in alphabetical order based on their names (one country's English name begin with letters that are not in the English alphabet; this displays towards the end of the page). As the page is quite long, and because I don't want the user to get lost, I added a scroll-to-top button, which displays after the user scroll down far enough so that the search & filter functionalities are hidden. I also added a link, which stays at the bottom of the viewport, to a trivia quiz.

On each country's page, I set the background to a random image of the country, based on a dynamic search on unsplash.com. As unsplash.com didn't have many images for some countries, I made an array of image links for each of these countries, then randomly set one of these as the background. In addition to further info on the country, I provide links to the pages of the countries that border the country, if there are any border countries. At the bottom of each country page, I added a link to the trivia quiz as well.

As mentioned above, I created a trivia quiz as well, which tests the user's general knowledge of country trivia. There is an option to play either a 10- or 25-question round. The total amount of questions in the pool, however, is much larger, so with each quiz round, either 10 or 25 randomly selected questions from the pool will be used for a given round. Answer options for each question also display in a random order, so this adds to the difficulty of memorizing the answers. Except for on smaller mobile devices, for which I set the background to a solid color, a random image of something cool in the world will display as the background upon page load & upon answering a question & moving on to the next one. At the end of the quiz, the user can see their score & receive a nice or a somewhat snarky feedback message, depending on how they did.

At any time, the user may toggle between light & dark display modes. These changes are stored in the user's browser's local storage, so they will be remembered when the user opens the site again, even after closing the browser & opening the site again in the future, as long as they do so outside of incognito mode & with the same browser as before, and didn't somehow reset browser settings that could affect this.

The site displays well on mobile screens as well as desktop-sized ones.
