"use strict"
console.log("Hello")

const songContainer = document.getElementById("songGenerator");

let allSongs = [];

// As a user, I would like a random generator page where I can get wedding song ideas. I would like to know the name of the song, the artist and the style of music. 
// 1. Create a constructor function for wedding songs; using the key:value pairs for a name, the artist and the genre of music.

function Song(songName, artist, genre, fileExtension = 'jpg') {
    this.songName = songName;
    this.artist = artist;
    this.genre = genre;
    this.imageUrl = `assets/${genre}.${fileExtension}`;
}

// 2. Create a random function that will loop through the new constructor objects.


// 3. Create a button for the user to click to generate a song.



// 4. Add an event listener to the button to listen for clicks and to then randomise and display the song.