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

function generatePassword(){
  //ask user which characters to use
var isLowercase = confirm("Do you want lowercase letters? \nOK for Yes, Cancel for No")
var isUppercase = confirm("Do you want uppercase letters? \nOK for Yes, Cancel for No")
var isNumbers = confirm("Do you want numbers? \nOK for Yes, Cancel for No")
var isSpecials = confirm("Do you want special characters? \nOK for Yes, Cancel for No")
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
