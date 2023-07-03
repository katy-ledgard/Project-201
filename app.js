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

const songButton = document.getElementById("randomSong").addEventListener("click", function(){
  
});

// atLast.renderSong();

// 4. Create function to handle randomiser button:
// Create a button for the user to click to generate a song.
//  Add an event listener to the button to listen for clicks and to then randomise and display the song.



// function renderSong() {
//    let song1 = getRandomSong(); 
  
//     while (
//       usedSongs.includes(song1)
//           ) {
      
//       song1 = getRandomSong();
//     }

//   renderResult()
//   }

  //   const image = document.createElement("img");
  //   image.setAttribute("src", imageUrl);
  //   image.setAttribute("alt", `An image interpretation of ${genre} music`);
  //   songContainer.appendChild(image);

  //   const h3 = document.createElement("h3");
  //   h3.textContent = "Your First Dance song is:"
  //   songContainer.appendChild(h3);

  //   const p = document.createElement("p");
  //   p.textContent = `${songName} by ${artist}.`
  //   songContainer.appendChild(p);

  
  //   usedSongs = [];
  //   usedSongs.push(song1);
  //   console.log(usedSongs);
  // }

//  function handleClick() {
//     songButton.addEventListener("click", renderSong);
    
// }

console.log(allSongs);
// console.log(usedSongs);
// Song.prototype.generateSong(){
  
// handleClick();