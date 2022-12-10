

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














