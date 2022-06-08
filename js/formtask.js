/*Form validation*/
var username = document.getElementById("username");
// var NameError = document.getElementById("NameError");
var nameOutput = document.getElementById("nameOutput");
var usermail = document.getElementById("usermail");
var mailOutput = document.getElementById("mailOutput");
var userpass = document.getElementById("userpass");
var passOutput = document.getElementById("passOutput");
var usersal = document.getElementById("usersal");
var salary = document.getElementById("salary");




function checkmyForm(name, mail, pass, salary, age) {
    //check name 
   
    if (username.value == "") {
        username.style.border = "3px solid red";
        // NameError.innerHTML = "Name is Required";
        nameOutput.value="Name is Required and need to characters";
    }
 


    //check mail 
   var mail_regex = /[a-z-0-9]@[a-z].[a-z]/;
  //var mail_regex=  /\w\w\w@\w\w\w.com/;
    if (mail_regex.test(usermail.value)) {
        usermail.style.border = "3px solid green";
        console.log("accessed");

    }
    else {
        usermail.style.border = "3px solid red";

       mailOutput.value="your mail not valid.exp:abc@xyz.rty"
    }
    

    //check  pass 
    var passRegex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
     if (passRegex.test(userpass.value)) {
        userpass.style.border = "3px solid green";
       // console.log("accessed");

    }
    else {
        userpass.style.border = "3px solid red";

       passOutput.value="your Pass  should be at least 8char "
    }



}

//Get salary
function change(){
    salary.innerHTML = usersal.value +"$";
   
}



//fire action on button saveData
var saveData = document.getElementById("saveData");
saveData.addEventListener("click", checkmyForm);
