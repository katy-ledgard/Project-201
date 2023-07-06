"use strict";
console.log("Pick a theme");

const themeContainer = document.getElementById("themeGenerator");
const themeForm = document.getElementById("themeForm");

let allThemes = [];
let usedThemes = [];

function Theme(themeName, about, imageUrl) {
  this.themeName = themeName;
  this.about = about;
  this.imageUrl = imageUrl;
  allThemes.push(this);
}

function getRandomSong() {
  return Math.floor(Math.random() * allThemes.length);
}

Theme.prototype.renderTheme = function () {
  const image = document.querySelector("img");
  image.setAttribute("src", this.imageUrl);
  image.setAttribute("alt", `An image interpretation of ${this.themeName}`);
  themeContainer.appendChild(image);

  const h3 = document.querySelector("h3");
  h3.textContent = this.themeName;
  themeContainer.appendChild(h3);

  const p = document.querySelector("p");
  p.textContent = this.about;
  themeContainer.appendChild(p);
};

const LOTR = new Theme(
  "The Lord of the Rings",
  "One ring to show our love, One ring to bind us, One ring to seal our love, And forever to entwine us.",
  "assets/lotr.jpg"
);
const HP = new Theme(
  "Harry Potter",
  "Harry Potter - the boy who lived, comes to get married.",
  "assets/hp.jpg"
);
const beach = new Theme(
  "Beach Wedding",
  "Oh I do like to wed beside the seaside.",
  "assets/beach.jpg"
);
const vegas = new Theme("Vegas Wedding", "VEGAS, BABY!", "assets/vegas.jpg");
const winter = new Theme(
  "Winter Wonderland Wedding",
  "Oh the weather outside is frightful, but this wedding is so delightful.",
  "assets/winter.jpg"
);

const themeButton = document
  .getElementById("randomTheme")
  .addEventListener("click", HandleClick);

function HandleClick() {
  let themeNumber = getRandomSong();
  let theme = allThemes[themeNumber];

  if (usedThemes.length == allThemes.length) {
    usedThemes = [];
  } else {
    while (usedThemes.includes(themeNumber)) {
      themeNumber = getRandomSong();
      theme = allThemes[themeNumber];
    }
  }

  usedThemes.push(themeNumber);

  theme.renderTheme();
}

themeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const themeName = event.target.themeName.value;
  const about = event.target.about.value;
  const imageURL = event.target.imageURL.value;

  const newTheme = new Theme(themeName, about, imageURL);

  saveTheme();

  themeForm.reset();
});

function saveTheme() {
  localStorage.setItem("newTheme", JSON.stringify(allThemes));
}

function loadTheme() {
  let storedTheme = JSON.parse(localStorage.getItem("newTheme"));

  if (storedTheme) {
    allThemes = [];
    for (let i = 0; i < storedTheme.length; i++) {
      new Theme(
        storedTheme[i].themeName,
        storedTheme[i].about,
        storedTheme[i].imageUrl
      );
    }
  }
}

loadTheme();
