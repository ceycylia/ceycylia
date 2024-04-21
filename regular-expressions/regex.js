let regexName = document.getElementById("inputName");
let nameError = document.getElementById("nameError");

let regexInputNIM = document.getElementById("NIM");
let NimError = document.getElementById("NimError");

let regexEmail = document.getElementById("email");
let emailError = document.getElementById("emailError");

let regexPhone = document.getElementById("phone");
let phoneError = document.getElementById("phoneError");

let regexPassword = document.getElementById("password");
let passwordError = document.getElementById("passwordError");

let regexConfirmPassword = document.getElementById("confirmPassword");
let confirmPasswordError = document.getElementById("confirmPasswordError");

regexPassword.onfocus = function () {
  document.getElementById("passwordError").style.display = "block";
};

// regexPassword.onblur = function () {
//   document.getElementById("passwordError").style.display = "none";
// };

const REGEX_NAME = new RegExp("^.{4,}$");
const REGEX_NIM = new RegExp("^s\\d{8}$");
const REGEX_EMAIL = new RegExp(
  "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
);
const REGEX_PHONE = new RegExp("^(\\+?62|0)[2-9]{1}[0-9]+$");
const REGEX_PASSWORD = new RegExp("^s\\d{8}$");
const REGEX_CONFIRM_PASSWORD = new RegExp("^" + regexPassword + "$");

regexName.addEventListener("input", () => {
  handleInput(
    regexName,
    nameError,
    REGEX_NAME,
    "Invalid, Nama harus lebih dari 4 karakter"
  );
});

regexInputNIM.addEventListener("input", () => {
  handleInput(
    regexInputNIM,
    NimError,
    REGEX_NIM,
    "Invalid, gunakan format awalan s dan NIM(8 angka) tanpa spasi."
  );
});

regexPassword.addEventListener("input", () => {
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var length = document.getElementById("length");
  var symbol = document.getElementById("symbol");
  var number = document.getElementById("number");

  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (regexPassword.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (regexPassword.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (regexPassword.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate symbols
  var symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  if (regexPassword.value.match(symbols)) {
    symbol.classList.remove("invalid");
    symbol.classList.add("valid");
  } else {
    symbol.classList.remove("valid");
    symbol.classList.add("invalid");
  }

  // Validate length
  console.log(regexPassword.value.length >= 8);
  if (regexPassword.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  // Validate if all criteria are met
  if (
    letter.classList.contains("valid") &&
    capital.classList.contains("valid") &&
    symbol.classList.contains("valid") &&
    number.classList.contains("valid") &&
    length.classList.contains("valid")
  ) {
    regexPassword.classList.remove("focus:ring-red-500");
    regexPassword.classList.add("focus:ring-green-500");
    regexPassword.classList.remove("ring-red-500");
    regexPassword.classList.add("ring-green-500");
  } else {
    regexPassword.classList.remove("focus:ring-green-500");
    regexPassword.classList.add("focus:ring-red-500");
    regexPassword.classList.remove("ring-green-500");
    regexPassword.classList.add("ring-red-500");
  }
});

regexEmail.addEventListener("input", function () {
  handleInput(
    regexEmail,
    emailError,
    REGEX_EMAIL,
    "Invalid, Gunakan Alamat Email yang Benar Example : adam@gmail.com dst."
  );
});

regexPhone.addEventListener("input", function () {
  handleInput(
    regexPhone,
    phoneError,
    REGEX_PHONE,
    "Invalid, Gunakan No. Telp yang Benar diawali +62, Example : +6281234567890"
  );
});

regexConfirmPassword.addEventListener("input", function () {
  if (regexConfirmPassword.value === regexPassword.value) {
    confirmPasswordError.classList.add("text-green-500");
    confirmPasswordError.classList.remove("text-red-500");
    regexConfirmPassword.classList.remove("focus:ring-red-500");
    regexConfirmPassword.classList.add("focus:ring-green-500");
    regexConfirmPassword.classList.remove("ring-red-500");
    regexConfirmPassword.classList.add("ring-green-500");
    confirmPasswordError.innerHTML = "Password matches";
  } else {
    confirmPasswordError.classList.add("text-red-500");
    confirmPasswordError.classList.remove("text-green-500");
    regexConfirmPassword.classList.remove("focus:ring-green-500");
    regexConfirmPassword.classList.add("focus:ring-red-500");
    regexConfirmPassword.classList.remove("ring-green-500");
    regexConfirmPassword.classList.add("ring-red-500");
    confirmPasswordError.innerHTML = "Passwords do not match";
  }
});

function handleInput(inputElement, ValidateElement, regex, ErrorMessage) {
  if (inputElement.value === "") {
    ValidateElement.classList.remove("text-green-500");
    ValidateElement.classList.remove("text-red-500");
    inputElement.classList.add("focus:ring-indigo-600");
    inputElement.classList.remove("focus:ring-red-500");
    inputElement.classList.remove("focus:ring-green-500");
    inputElement.classList.add("ring-grey-300");
    inputElement.classList.remove("ring-red-500");
    inputElement.classList.remove("ring-green-500");
    ValidateElement.innerHTML = "";
  } else if (regex.test(inputElement.value)) {
    ValidateElement.classList.add("text-green-500");
    ValidateElement.classList.remove("text-red-500");
    inputElement.classList.remove("focus:ring-indigo-600");
    inputElement.classList.remove("focus:ring-red-500");
    inputElement.classList.add("focus:ring-green-500");
    inputElement.classList.remove("ring-grey-300");
    inputElement.classList.remove("ring-red-500");
    inputElement.classList.add("ring-green-500");
    ValidateElement.innerHTML = "Valid";
  } else {
    ValidateElement.classList.add("text-red-500");
    ValidateElement.classList.remove("text-green-500");
    inputElement.classList.remove("focus:ring-indigo-600");
    inputElement.classList.remove("focus:ring-green-500");
    inputElement.classList.add("focus:ring-red-500");
    inputElement.classList.remove("ring-grey-300");
    inputElement.classList.remove("ring-green-500");
    inputElement.classList.add("ring-red-500");
    ValidateElement.innerHTML = ErrorMessage;
  }
}
