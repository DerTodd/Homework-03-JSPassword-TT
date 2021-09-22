// Assignment Code
var generateBtn = document.querySelector("#generate");
//Password arrays and variables
var pwd;
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var selectedcriteria;
var passW = " ";
var newpass = " ";

//selectedcriteria = symbols[Math.floor(Math.random() * symbols.length)];
//console.log(selectedcriteria);

//passW = selectedcriteria;
//for (var i=0; i < 5; i++) {
  //selectedcriteria = symbols[Math.floor(Math.random() * symbols.length)];
  //newpass = passW.concat(selectedcriteria);
  //console.log(newpass);
  //var something = newpass.pop();
  //console.log(something);
//}
function fun() {
  for (var i=0; i < 5; i++) {

    selectedcriteria = symbols[Math.floor(Math.random() * symbols.length)];
    newpass = newpass.concat(selectedcriteria);
    console.log(newpass);
  };
  return newpass;
};
fun();
console.log(passW)
console.log(newpass)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function(){
  selectedcriteria[Math.floor(Math.random() * options.length)];

  return pwd;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
