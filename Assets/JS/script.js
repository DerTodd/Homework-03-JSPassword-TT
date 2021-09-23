// Assignment Code
//Comma replace https://reactgo.com/javascript-remove-commas-string/
// remove spaces https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript#5963202
//return multiple variables https://stackoverflow.com/questions/19738207/return-two-variables-in-one-function
var generateBtn = document.querySelector("#generate");
//Password arrays and variables
var pwdLength = " ";
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var selectedcriteria;
var passW = " ";
var newpass = " ";
var newlist = " ";
var choices = " ";


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
//Writing the Function to get user input
function genpass () {
  var beginp = confirm("Would you like a new password?")
  console.log(beginp);
  if (beginp === true) {
      var alphaU = confirm("Would you like to include upper case letters?");
      console.log (alphaU);
  }else {
    return;
  };
  if (alphaU === true) {
      console.log(alphaU);
      newlist = newlist.concat(alphaUpper);
      console.log(newlist);
      var choice = "Upper Case Letters    ";
      console.log(choice);
      choices = choices.concat(choice);
      console.log(choices);
  }else {
        newlist = newlist;
    }return (newlist, choices);
  };   
function genpass2 (){
  var alphaL = confirm("Would you like to include lower case letters?");
  console.log (alphaL);
  if (alphaL === true) {
    console.log(alphaL);
    newlist = newlist.concat(alphaLower);
    console.log(newlist);
    var choice = "Lower Case Letters    ";
    console.log(choice);
    choices = choices.concat(choice);
    console.log(choices);
}else {
      newlist = newlist;
  }return newlist;
};   
function genpass3 (){
  var numch = confirm("Would you like to include numbers?");
  console.log (numch);
  if (numch === true) {
    console.log(numch);
    newlist = newlist.concat(numeric);
    console.log(newlist);
    var choice = "Numbers    ";
    console.log(choice);
    choices = choices.concat(choice);
    console.log(choices);
}else {
      newlist = newlist;
  }return newlist;
};   
function genpass4 (){
  var symch = confirm("Would you like to include symbols?");
  console.log (symch);
  if (symch === true) {
    console.log(symch);
    newlist = newlist.concat(symbols);
    console.log(newlist);
    var choice = "Symbols    ";
    console.log(choice);
    choices = choices.concat(choice);
    console.log(choices);
}else {
      newlist = newlist;
  }return newlist;
}; 
function howlong (){
  var lench = prompt("How long would you like your password to be? Please select a number between 8 and 128 (choose 128 if you are insane)");
  console.log (lench);
  pwdLength = lench;
  console.log(pwdLength)
  return pwdLength;
}; 
function funny() {
  for (var i=0; i < pwdLength; i++) {
    var newListString = newlist.toString();
    var noComma = newListString.replace(/,/g, "")
    var noSpace = noComma.replace(/\s/g,"");
    var pen = noSpace.length;
    console.log(pen);
    console.log(noSpace);
    selectedcriteria = noSpace[Math.floor(Math.random() * pen)];
    newpass = newpass.concat(selectedcriteria);
    console.log(newpass);
  };
  return newpass;
};
function whatYouWant() {
  console.log(choices);
  alert("You select the following: " + choices);
};

//Function designed to return a random string based on iteriations.
function fun() {
  for (var i=0; i < 5; i++) {

    selectedcriteria = symbols[Math.floor(Math.random() * symbols.length)];
    newpass = newpass.concat(selectedcriteria);
    console.log(newpass);
  };
  return newpass;
};

//genpass()
//genpass2()
//genpass3()
//genpass4()
//howlong()
//funny()

function generatePassword () {
  genpass();
  genpass2();
  genpass3();
  genpass4();
  howlong();
  funny();
  whatYouWant ();
  password = newpass;
  console.log(password);
  return password;
};
//fun();
console.log(passW);
console.log(newpass);
console.log(newlist);
console.log(pwdLength);
console.log(choices);
// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//writePassword()
//var generatePassword = function(){
  //selectedcriteria[Math.floor(Math.random() * options.length)];

  //return pwd;
//}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
