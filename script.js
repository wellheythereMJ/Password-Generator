// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//placeholder array
var finalPass = []

//4 arrays of characters
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
var numbers = "1234567890".split("")
var specials = "!@#$%^&*_+".split("")


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
