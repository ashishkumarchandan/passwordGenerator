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

let generateRandomNumber = () => {
  return getRandomInteger(0, 9);
};

let generateLowerCase = () => {
  return String.fromCharCode(getRandomInteger(97, 123));
};

let generateUpperCase = () => {
  return String.fromCharCode(getRandomInteger(65, 91));
};

let generateSymbol = () => {
  const randNum = getRandomInteger(0, symbols.length);
  return symbols.charAt(randNum);
};

let calculateStrength = () => {
  let hasUpper = false;
  let hasLower = false;
  let hasNum = false;
  let hasSym = false;
  if (uppercaseCheck.checked) hasUpper = true;
  if (lowercaseCheck.checked) hasLower = true;
  if (numbersCheck.checked) hasNum = true;
  if (symbolsCheck) hasSym = true;
  if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8)
    setIndicator("#0f0");
  else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6)
    setIndicator("#ff0");
  else setIndicator("#f00");
};

let copyContent = async () => {
  try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.textContent = "copied";
  } catch (err) {
    copyMsg.textContent = "Failed";
  }
  copyMsg.classList.add("active");
  setTimeout(() => {
    copyMsg.classList.remove("active");
  }, 2000);
};

inputSlider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

copyBtn.addEventListener("click", () => {
  if (passwordDisplay.value) copyContent();
});

generateButton.addEventListener("click", () => {
  if (passwordLength < 8 || passwordLength > 20) return;
  if (checkCount === 0) return;
  generatePassword();
});

let sufflePassword = (sufflePassword) => {

function handleCheckboxChange() {
  checkCount = 0;
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) checkCount++;
  });
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
  handleSlider();
}

allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckboxChange);
});

let funcArr = [];
if (uppercaseCheck) funcArr.push(generateUpperCase);
if (lowercaseCheck) funcArr.push(generateLowerCase);
if (numbersCheck) funcArr.push(generateRandomNumber);
if (symbolsCheck) funcArr.push(generateSymbol);

for (let i = 0; i < funcArr.length; i++) {
  password += funcArr[i]();
}

for (let i = 0; i < passwordLength - funcArr.length; i++) {
  let randIndex = getRandomInteger(0, funcArr.length);
}

password = sufflePassword(Array.from(password));
passwordDisplay.value = password;

document.addEventListener("DOMContentLoaded", () => {
  handleSlider();
  setIndicator();
  // Set initial values for checkboxes if needed
  // For example:
  // uppercaseCheck.checked = true;
  // checkCount = 1;
});
