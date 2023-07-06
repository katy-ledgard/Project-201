"use strict";
console.log("Pick a colour scheme!");

document
  .getElementById("defaultButton")
  .addEventListener("click", chooseDefaultTheme);

document
  .getElementById("greenButton")
  .addEventListener("click", chooseGreenTheme);

document
  .getElementById("purpleButton")
  .addEventListener("click", choosePurpleTheme);

let header = document.getElementById("header");
let footer = document.getElementById("footer");
let bio = document.getElementById("bio");
let allButtons = document.querySelector("button");
let allButtons2 = document.getElementById("submit");

let theme = "default";

function chooseDefaultTheme() {
  let button = document.getElementById("defaultButton");
  header.classList.remove("green");
  header.classList.remove("purple");
  header.classList.add("default");
  footer.classList.remove("green");
  footer.classList.remove("purple");
  footer.classList.add("default");

  if (bio) {
    bio.classList.remove("green");
    bio.classList.remove("purple");
    bio.classList.add("default");
  }

  if (allButtons) {
    allButtons.classList.remove("green");
    allButtons.classList.remove("purple");
    allButtons.classList.add("default");
  }

  if (allButtons2) {
    allButtons2.classList.remove("green");
    allButtons2.classList.remove("purple");
    allButtons2.classList.add("default");
  }

  if (button) {
    button.setAttribute("checked", "checked");
  }
  theme = "default";
  saveTheme();
}

function chooseGreenTheme() {
  let button = document.getElementById("greenButton");
  header.classList.remove("default");
  header.classList.remove("purple");
  header.classList.add("green");
  footer.classList.remove("default");
  footer.classList.remove("purple");
  footer.classList.add("green");

  if (bio) {
    bio.classList.remove("default");
    bio.classList.remove("purple");
    bio.classList.add("green");
  }

  if (allButtons) {
    allButtons.classList.remove("default");
    allButtons.classList.remove("purple");
    allButtons.classList.add("green");
  }
  if (allButtons2) {
    allButtons2.classList.remove("default");
    allButtons2.classList.remove("purple");
    allButtons2.classList.add("green");
  }

  if (button) {
    button.setAttribute("checked", "checked");
  }
  theme = "green";
  saveTheme();
}

function choosePurpleTheme() {
  let button = document.getElementById("purpleButton");
  header.classList.remove("green");
  header.classList.remove("default");
  header.classList.add("purple");
  footer.classList.remove("green");
  footer.classList.remove("default");
  footer.classList.add("purple");
  if (bio) {
    bio.classList.remove("green");
    bio.classList.remove("default");
    bio.classList.add("purple");
  }
  if (allButtons) {
    allButtons.classList.remove("green");
    allButtons.classList.remove("default");
    allButtons.classList.add("purple");
  }
  if (allButtons2) {
    allButtons2.classList.remove("green");
    allButtons2.classList.remove("default");
    allButtons2.classList.add("purple");
  }

  if (button) {
    button.setAttribute("checked", "checked");
  }
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
     return;
  }

  if (storedTheme === "default") {
    chooseDefaultTheme();
  } else if (storedTheme === "green") {
    chooseGreenTheme();
  } else if (storedTheme === "purple") {
    choosePurpleTheme();
  }
}
loadPage();
