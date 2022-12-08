
// Select the botton 
const generateBtn = document.querySelector("#generate");

// create the variables 
let selectLength;
let selectUpercase;
let selectLowercase;
let selectSpecialCharacters;

// Generate the users choice in password 
const passwordChoice = () => {

  //define the variable and select the right length 
  selectLength = parseInt(prompt("Type the length of your password from 8 to 128"));
  if(isNaN(selectLength) == true || selectLength < 8 || selectLength  > 128) {
    alert("Type the correct length")
    passwordChoice()
  };

  //define the variables
  selectUpercase = confirm("Do you want to include uppercase letters?");
  selectLowercase = confirm("Do you want to include lowercase letters?");
  selectSpecialCharacters = confirm("Do you want to include special characters?");
  if(selectUpercase == false && selectLowercase == false && selectSpecialCharacters == false) {
    alert("Select at least one option");
    passwordChoice()
  };

};


//generate password 
const generatePassword = () => {

  //creat the choices 
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let specialCharacter = "!@#$%^&*()";
  // create an empty list to append the choices selected 
  let passwordSelected = [];

  // if statement to append the variables selected 
  if(selectUpercase == true){
    passwordSelected.push(upperCase);
  };
  if(selectLowercase == true){
    passwordSelected.push(lowerCase);
  };
  if(selectSpecialCharacters == true){
    passwordSelected.push(specialCharacter);
  };
  
  // program to generate random strings







if(passwordSelected.length == 1){

const passwordone = passwordSelected[0];

function generatePasswordone(selectLength) {
  let result = "";
  const passwordSelectedLength = passwordone.length;
  for ( let i = 0; i < selectLength; i++) {
    result += passwordone.charAt(Math.floor(Math.random() * passwordSelectedLength))
  }
  return result;
  
};

console.log(result);

};










if(passwordSelected.length == 2) {
  let randomNumberOne = Math.floor(Math.random() * selectLength) + 1 ;

}







};













// creat 3 cases where if the array is leng is 1 2 or 3 
  // if its one then splict the array loop true and dd the new number to the string 
  //2 if its tho generate random number that biger than 2 and append then select teh fist number and use that for the first 
  // then grab the secon number and use it on the second array 
  //3 generate teh first number thats giger that 3 


//now how do i acces the list appended and crated with the carracters chossen 



//Add event listener to button 
generateBtn.addEventListener("click", () => {
  passwordChoice();
  generatePassword();
  
});

/*
//use prompt (parseIt)
///use confirm()
//can you carrectorice the confirm()??
/// use the condition to see if there sayong 
1 click the button to generate a password 
2 presented with a series of prompts for password criteria 
	a. Select which criteria to include in the password 
		I. propt for the length of the password 8-128
		II. Confirm or not to include lowercase, uppercase, numeric, and/		  or special characters
		III. Atleast one character type should be selected if not try again 
		IV. Generated password 
3 display password in alert or written to the page 
*/


