"use strict"
console.log("Pick a theme!");

document.getElementById("defaultButton").addEventListener("click", chooseDefaultTheme);

document.getElementById("greenButton").addEventListener("click", chooseGreenTheme);

document.getElementById("purpleButton").addEventListener("click", choosePurpleTheme);

let theme = "default";

function chooseDefaultTheme() {
let header = document.getElementById("header");
let footer = document.getElementById("footer");
let bio = document.getElementById("bio");
let button = document.getElementById("defaultButton");
header.classList.remove("green");
header.classList.remove("purple");
footer.classList.remove("green");
footer.classList.remove("purple");
bio.classList.remove("green");
bio.classList.remove("purple");
header.classList.add("default");
footer.classList.add("default");
bio.classList.add("default");
button.setAttribute("checked", "checked")
theme = "default";
saveTheme();
}

function chooseGreenTheme() {
    let header = document.getElementById("header");
    let footer = document.getElementById("footer");
let bio = document.getElementById("bio");
let button = document.getElementById("greenButton");
header.classList.remove("default");
header.classList.remove("purple");
footer.classList.remove("default");
footer.classList.remove("purple");
bio.classList.remove("default");
bio.classList.remove("purple");
header.classList.add("green");
footer.classList.add("green");
bio.classList.add("green");
button.setAttribute("checked", "checked")
theme = "green";
saveTheme();
}

function choosePurpleTheme() {
    let header = document.getElementById("header");
    let footer = document.getElementById("footer");
    let bio = document.getElementById("bio");
    let button = document.getElementById("purpleButton");
    header.classList.remove("green");
    header.classList.remove("default");
    footer.classList.remove("green");
    footer.classList.remove("default");
    bio.classList.remove("green");
    bio.classList.remove("default");
    header.classList.add("purple");
    footer.classList.add("purple");
    bio.classList.add("purple");
    button.setAttribute("checked", "checked")    
    theme = "purple";
    saveTheme();
}

function saveTheme() {
    let getTheme = JSON.stringify(theme);
    localStorage.setItem("theme", getTheme);
}

function loadPage() {
    let storedTheme = JSON.parse(localStorage.getItem("theme"));

    if (storedTheme === null) {
        console.log("nothing here");
        return;
    }   

    if (storedTheme === "default") {
    // console.log("default");
    chooseDefaultTheme();
    } else if (storedTheme === "green") {
        // console.log("green");
        chooseGreenTheme();
    } else if (storedTheme === "purple") {
        // console.log("purple");
        choosePurpleTheme();
    }

}
loadPage()