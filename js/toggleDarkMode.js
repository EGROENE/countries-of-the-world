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
  sun.style.opacity = "0.4";
  moon.style.opacity = "1";
} else {
  sun.style.opacity = "1";
  moon.style.opacity = "0.4";
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});