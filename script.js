// JavaScript

const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const generateButton = document.querySelector(".generateButton");
const indicator = document.querySelector("[data-indicator]");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}]|:;<,>.?/";

let password = "";
let passwordLength = 8;
let checkCount = 0;

let handleSlider = () => {
  inputSlider.value = passwordLength;
  lengthDisplay.textContent = passwordLength;
};

let setIndicator = () => {
  indicator.style.backgroundColor = color;
};

let getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

document.addEventListener("DOMContentLoaded", () => {
  handleSlider();
  setIndicator();
  // Set initial values for checkboxes if needed
  // For example:
  // uppercaseCheck.checked = true;
  // checkCount = 1;
});
