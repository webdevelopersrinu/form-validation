let fnameError = document.getElementById("fnameError");
let lnameError = document.getElementById("lnameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let phoneError = document.getElementById("phoneError");
let ageEroor = document.getElementById("ageEroor");
let cityError = document.getElementById("cityError");
let PincodeError = document.getElementById("PincodeError");

// let isAlpha = /^[A-Za-z]+$/;
let isStrongPassword =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let isPhoneNumber = /^[6-9]\d{9}$/;
let isPinCode = /^[1-9][0-9]{5}$/;
let isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let isAge=/^(?:[1-9][0-9]?|1[01][0-9]|150)$/

const singupFormSubmit = document.getElementById("singup-form");

const userData = {
  Gender: "",
  Pincode: "",
  address: "",
  age: "",
  city: "",
  email: "",
  fname: "",
  lname: "",
  password: "",
  phone: "",
};
singupFormSubmit.addEventListener("submit", (e) => {
  fnameError.innerText = "";
  lnameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";
  phoneError.innerText = "";
  ageEroor.innerText = "";
  cityError.innerText = "";
  PincodeError.innerText = "";
  e.preventDefault();
  const submitData = new FormData(e.target);
  for (let [key, value] of submitData.entries()) {
    userData[key] = value;
  }
  if (!isStrongPassword.test(userData.password)) {
    passwordError.innerText =
      "enter Strong Password At least 8 characters, containing at least one uppercase letter, one lowercase letter, one digit, and one special character";
  }
  if (!isPhoneNumber.test(userData.phone)) {
    phoneError.innerText = "enter valid phone number";
  }
  if (!isPinCode.test(userData.Pincode)) {
    PincodeError.innerText = "enter valid pin code";
  }
  if (!isEmail.test(userData.email)) {
    emailError.innerText = "enter valid email";
  }
  if(!isAge.test(userData.age)){
    emailError.innerText = "enter valid age";
  }
});
