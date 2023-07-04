"use strict"
console.log("Hello")

const songContainer = document.getElementById("songGenerator");

let allSongs = [];
let usedSongs = [];

// As a user, I would like a random generator page where I can get wedding song ideas. I would like to know the name of the song, the artist and the style of music. 
// 1. Create a constructor function for wedding songs; using the key:value pairs for a name, the artist and the genre of music.

function Song(songName, artist, genre, fileExtension = 'jpg') {
    this.songName = songName;
    this.artist = artist;
    this.genre = genre;
    this.imageUrl = `assets/${genre}.${fileExtension}`;
    allSongs.push(this);
}

// 2. Create a random function that will loop through the new constructor objects.

function getRandomSong() {
    return Math.floor(Math.random() * allSongs.length);
  }
  
//3. Create a render function to display the song details and image.

Song.prototype.renderSong = function() {
  
    const image = document.createElement("img");
    image.setAttribute("src", this.imageUrl);
    image.setAttribute("alt", `An image interpretation of ${this.genre} music`);
    songContainer.appendChild(image);

    const h3 = document.createElement("h3");
    h3.textContent = "Your First Dance song is:"
    songContainer.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = `${this.songName} by ${this.artist}.`
    songContainer.appendChild(p);

}

const atLast = new Song("At Last", "Etta James", "RnB");
const thinkingOutLoud = new Song("Thinking Out Loud", "Ed Sheeran", "pop");
const KissTheRain = new Song("Kiss the Rain", "Yiruma", "classical");
const MissAThing = new Song("I Don't Wanna Miss a Thing", "Aerosmith", "rock");
const AllIAskOfYou = new Song("All I Ask of You", "The Phantom of the Opera", "musical-theatre");

// 4. Create function to handle randomiser button:
// Create a button for the user to click to generate a song.
//  Add an event listener to the button to listen for clicks and to then randomise and display the song.


const songButton = document.getElementById("randomSong").addEventListener("click", HandleClick);

function HandleClick() {
  songContainer.innerHTML = "";
  let songNumber = getRandomSong(); 
  let song = allSongs[songNumber]


  // console.log(song);

    while (
      usedSongs.includes(songNumber)
          ) {
      
      songNumber = getRandomSong();
    }


  usedSongs = [];
  usedSongs.push(songNumber);
  // console.log(usedSongs);
  // console.log(song);
   
    song.renderSong();
    

  
};






// console.log(allSongs);
