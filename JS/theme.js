"use strict";
console.log("theme");

const themeContainer = document.getElementById("themeGenerator");
const themeForm = document.getElementById("themeForm");

let allThemes = [];
let usedThemes = [];

// As a user, I would like a random generator page where I can get wedding song ideas. I would like to know the name of the song, the artist and the style of music.
// 1. Create a constructor function for wedding songs; using the key:value pairs for a name, the artist and the genre of music.

function Theme(themeName, about, imageUrl) {
  this.themeName = themeName;
  this.about = about;
  this.imageUrl = imageUrl;
  allThemes.push(this);
}

// 2. Create a random function that will loop through the new constructor objects.

function getRandomSong() {
  return Math.floor(Math.random() * allThemes.length);
}

//3. Create a render function to display the song details and image.

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

const LOTR = new Theme("The Lord of the Rings", "One ring to show our love, One ring to bind us, One ring to seal our love, And forever to entwine us.", "assets/lotr.jpg");
const HP = new Theme("Harry Potter", "Harry Potter - the boy who lived, comes to get married.", "assets/hp.jpg");
const beach = new Theme("Beach Wedding", "Oh I do like to wed beside the seaside.", "assets/beach.jpg");
const vegas = new Theme("Vegas Wedding", "VEGAS, BABY!", "assets/vegas.jpg");
const winter = new Theme("Winter Wonderland Wedding", "Oh the weather outside is frightful, but this wedding is so delightful.", "assets/winter.jpg");

// console.log(LOTR);

// 4. Create function to handle randomiser button:
// Create a button for the user to click to generate a song.
//  Add an event listener to the button to listen for clicks and to then randomise and display the song.

const themeButton = document
  .getElementById("randomTheme")
  .addEventListener("click", HandleClick);

function HandleClick() {
//   songContainer.innerHTML = "";
  let themeNumber = getRandomSong();
  let theme = allThemes[themeNumber];
    // console.log(song);

if (usedThemes.length == allThemes.length) {
  usedThemes = [];
} else {
  while (usedThemes.includes(themeNumber)) {
    themeNumber = getRandomSong();
    theme =  allThemes[themeNumber];


  }
}
  
  usedThemes.push(themeNumber);
  // console.log(usedSongs);
  // console.log(song);

  theme.renderTheme();
}

// console.log(allSongs);


// 3. Add an Event Listener which adds the form content as a new object.
//4. Declare variables to get form values.
//5. Use form values to create new Song object.
//6. Reset Form.

themeForm.addEventListener("submit", function(event){
  event.preventDefault();

  const themeName = event.target.themeName.value;
  const about = event.target.about.value;
  const imageURL = event.target.imageURL.value;

const newTheme = new Theme(themeName, about, imageURL);
console.log(newTheme);
saveTheme();

themeForm.reset();
});

function saveTheme() {
  localStorage.setItem("newTheme", JSON.stringify(allThemes));
};

function loadTheme(){
  let storedTheme = JSON.parse(localStorage.getItem("newTheme"));

  if (storedTheme) {
    allThemes = [];
  for (let i = 0; i < storedTheme.length; i++) {
    new Theme(storedTheme[i].themeName, storedTheme[i].about, storedTheme[i].imageUrl);
  }

  }
};

loadTheme();