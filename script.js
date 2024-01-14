// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//4 arrays of characters
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
var numbers = "1234567890".split("")
var specials = "!@#$%^&*_+".split("")

function generatePassword() {
  //final array storage box, starts empty every Generate Password click
  var finalPass = []
  var userOptions = []
  var userResponse = prompt("Choose a password length between 8 and 128 characters")
  if (userResponse < 8 || userResponse > 128 || isNaN(userResponse)) {
  alert ("You password must be between 8 and 128 characters")
  return generatePassword()

  }
  //ask user which characters to use
  var isLowercase = confirm("Do you want lowercase letters? \nOK for Yes, Cancel for No")
  var isUppercase = confirm("Do you want uppercase letters? \nOK for Yes, Cancel for No")
  var isNumbers = confirm("Do you want numbers? \nOK for Yes, Cancel for No")
  var isSpecials = confirm("Do you want special characters? \nOK for Yes, Cancel for No")
  
  //ensure chosen items are included 
  if (isLowercase) {
    var randomCharacter = Math.floor(Math.random() * lowercase.length)
    finalPass.push(lowercase[randomCharacter]) 
    //add all lowercase characters to user options
  }
  
  if (isUppercase) {
    var randomCharacter = Math.floor(Math.random() * uppercase.length)
    finalPass.push(lowercase[randomCharacter])
    //all uppercase characters to user options
  }
  
  if (isNumbers) {
    var randomCharacter = Math.floor(Math.random() * numbers.length)
    finalPass.push(lowercase[randomCharacter])
    //add numbers to user options
  }
  
  if (isSpecials) {
    var randomCharacter = Math.floor(Math.random() * specials.length)
    finalPass.push(lowercase[randomCharacter])
    //add specials to user options
    
  }
  //add if statement for if they said no to all types of characters
  //research while loops. while final pass < user response, keep making random characters from user options
  //return finalpass
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
