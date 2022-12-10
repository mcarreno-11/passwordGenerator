const btnGenerate = document.querySelector('#generate');


//generate the password 
const passwordGenerator = () => {

    //length of password
    let selectLength = parseInt(prompt("Type the lenght of your password form 8 to 128"));

    //selectors 
    let selectLowercase;
    let selectUpercase;
    let selectSpecialCharacters;

    // select the password
    if(selectLength < 8 || selectLength > 128){
        alert("Type the correct lenght");
        passwordGenerator();
    } else {
        selectUpercase = confirm("Do you wan to include uppercase?");
        selectLowercase = confirm("Do you want to include lowercase?");
        selectSpecialCharacters = confirm("Do you want to inlcude special characters?");

        if(selectUpercase == false && selectLowercase == false && selectSpecialCharacters ==  false){
            alert("Select at least one option");
            passwordGenerator();

        };
    };

    const generatePassword = () => {

        //FINISH THE PASSWORD GENERATOR
    

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

    };

   
};





btnGenerate.addEventListener('click', passwordGenerator);