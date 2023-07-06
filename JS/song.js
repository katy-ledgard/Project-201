"use strict";
console.log("Hello");

const songContainer = document.getElementById("themeGenerator");
const songForm = document.getElementById("songForm");

let allSongs = [];
let usedSongs = [];

function Song(songName, artist, genre, fileExtension = "jpg") {
  this.songName = songName;
  this.artist = artist;
  this.genre = genre;
  this.imageUrl = `assets/${genre}.${fileExtension}`;
  allSongs.push(this);
}

function getRandomSong() {
  return Math.floor(Math.random() * allSongs.length);
}

Song.prototype.renderSong = function () {
  const image = document.querySelector("img");
  image.setAttribute("src", this.imageUrl);
  image.setAttribute("alt", `An image interpretation of ${this.genre} music`);
  songContainer.appendChild(image);

  const h3 = document.querySelector("h3");
  h3.textContent = "Your 'First Dance' song is:";
  songContainer.appendChild(h3);

  const p = document.querySelector("p");
  p.textContent = `${this.songName} by ${this.artist}.`;
  songContainer.appendChild(p);
};

const atLast = new Song("At Last", "Etta James", "RnB");
const thinkingOutLoud = new Song("Thinking Out Loud", "Ed Sheeran", "pop");
const KissTheRain = new Song("Kiss the Rain", "Yiruma", "classical");
const MissAThing = new Song("I Don't Wanna Miss a Thing", "Aerosmith", "rock");
const AllIAskOfYou = new Song(
  "All I Ask of You",
  "The Phantom of the Opera",
  "musical-theatre"
);
const fiveHrd = new Song(
  "I'm Gonna Be (500 Miles) - cover",
  "Sleeping At Last",
  "pop"
);
const coverYou = new Song("I'll Cover You", "Rent", "musical-theatre");
const AllMyLife = new Song("All My Life", "K-Ci & JoJo", "RnB");
const Brud = new Song("Brudevalsen", "Niels W. Gade", "classical");
const Something = new Song("Something", "The Beatles", "rock");

const songButton = document
  .getElementById("randomSong")
  .addEventListener("click", HandleClick);

function HandleClick() {
  let songNumber = getRandomSong();
  let song = allSongs[songNumber];

  if (usedSongs.length == allSongs.length) {
    usedSongs = [];
  } else {
    while (usedSongs.includes(songNumber)) {
      songNumber = getRandomSong();
      song = allSongs[songNumber];
    }
  }

  usedSongs.push(songNumber);

  song.renderSong();
}

songForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const songName = event.target.songName.value;
  const artist = event.target.artist.value;
  const genres = event.target.genres.value;

  const newSong = new Song(songName, artist, genres);

  saveSong(newSong);

  songForm.reset();
});

function saveSong() {
  localStorage.setItem("newSong", JSON.stringify(allSongs));
}

function loadSong() {
  let storedSong = JSON.parse(localStorage.getItem("newSong"));

  if (storedSong) {
    allSongs = [];
    for (let i = 0; i < storedSong.length; i++) {
      new Song(
        storedSong[i].songName,
        storedSong[i].artist,
        storedSong[i].genre
      );
    }
  }
}

loadSong();
