
document.getElementById("Dob").addEventListener("blur",()=>{
    validateDOB();
    ValidateForm();
})

document.getElementById("Name").addEventListener("blur",()=>{
    validateName();
    ValidateForm();
})

document.getElementById("Phone").addEventListener("blur",()=>{
    validatePhone()
    ValidateForm();
})
document.getElementById("Email").addEventListener("blur",()=>{
    validateEmail()
    ValidateForm();
})

document.getElementById("password").addEventListener("blur",()=>{
    ValidatePassword()
    ValidateForm();
})

document.getElementById("ConfirmPass").addEventListener("blur",()=>{
    ValidateConfirmPassword()
    ValidateForm();
})


document.getElementById("SubmitButton").addEventListener("click", function(event) {
    event.preventDefault(); 
    isValid && validateSubmit();
});

var dis = true
    
    
 


var sessionDuration = 600; 

var isValid = true

var timer = sessionDuration;
var timerElement = document.getElementById("timer");
var interval = setInterval(function() {
  var minutes = Math.floor(timer / 60);
  var seconds = timer % 60;
  timerElement.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  
  if (timer <= 0) {
    clearInterval(interval);
    resetSessionTimer()
    isValid = false;
    
    alert("Session expired!");
  } else {
    timer--;
  }
}, 1000);

function resetSessionTimer() {
  timer = sessionDuration;
}



function validateDOB() {
    var DobValue = document.getElementById("Dob").value
    var DobValueInput = document.getElementById("Dob")
    let ErrorMessage = document.getElementById("DobError");
    var Dob = new Date(DobValue);
    var Today = new Date()
    if (Dob > Today) {
        ErrorMessage.textContent = "Please enter a valid date of birth"
        DobValueInput.classList.add("invalid")
        
        DobValueInput.classList.remove("valid")
    }
    else{
        ErrorMessage.textContent =""
        DobValueInput.classList.add("valid")
        DobValueInput.classList.remove("invalid")
    }
   
    
}


function validateName() {
    var Name = document.getElementById("Name").value
    var NameInput = document.getElementById("Name")
    var ErrorMessage = document.getElementById("NameError");
    
    var Condition = /^[A-Za-z ]{3,}$/
    if(!Condition.test(Name)) {
        ErrorMessage.textContent = "Please enter a valid name"
        NameInput.classList.add("invalid")
        NameInput.classList.remove("valid");
        InputDisable(true)
        NameInput.disabled=false
        


    }else{
        ErrorMessage.textContent = ""
        NameInput.classList.add("valid");
        NameInput.classList.remove("invalid")
        
        InputDisable(false)
    }
    (function(){
        ErrorMessage.textContent = ""

    })
    
}



function validateEmail() {
    var email = document.getElementById("Email").value;
    var emailInput = document.getElementById("Email")
    var Condition = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var ErrorMessage = document.getElementById("EmailError");
    
    if(!Condition.test(email)) {
        ErrorMessage.textContent = "Please enter a valid name"
        emailInput.classList.add("invalid")
        emailInput.classList.remove("valid");
        InputDisable(true)
        emailInput.disabled = false

    }else{
        ErrorMessage.textContent = ""
        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid")
        InputDisable(false)

    }
    (function(){
        ErrorMessage.textContent = ""
    })
    
}

function validatePhone() {
    var Phone = document.getElementById("Phone").value
    
    var phoneInput = document.getElementById("Phone");
    var ErrorMessage = document.getElementById("PhoneError");
    
    var condition = /^[0-9]{10}$/;
    if (!condition.test(Phone)) {
        ErrorMessage.textContent = "Please enter a valid phone number";
        phoneInput.classList.add("invalid");
        phoneInput.classList.remove("valid");
        InputDisable(true)
        phoneInput.disabled=false
    } else {
        ErrorMessage.textContent = "";
        phoneInput.classList.remove("invalid");
        phoneInput.classList.add("valid");
        InputDisable(false)
        

    }
    (function(){
        ErrorMessage.textContent = ""
    })
    
}

function ValidatePassword(){
    var pass = document.getElementById("password").value
    var passInput = document.getElementById("password")
    var ErrorMessage = document.getElementById("PasswordError")
    var Condition = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\W]).{8,}$/
    if (!Condition.test(pass)) {
        ErrorMessage.textContent = "Password Must Contain at least 8 Character one number ,one Special Character,one upperCase letter and Lower Case Letter , "
        passInput.classList.add('invalid') 
        passInput.classList.remove("valid")
        InputDisable(true)
        passInput.disabled=false
    }else{
        ErrorMessage.textContent = ""
        passInput.classList.add('valid') 
        passInput.classList.remove("invalid")
        InputDisable(false)
    }
    (function(){
        ErrorMessage.textContent = ""
    })
}

function ValidateConfirmPassword(){
    var pass = document.getElementById("password").value
    var ConfirmPass = document.getElementById("ConfirmPass").value
    var ConfirmPassInput = document.getElementById("ConfirmPass")
    var ErrorMessage = document.getElementById("ConfirmError")
    if(pass !== ConfirmPass) {
        ErrorMessage.textContent = "Password does not match"
        ConfirmPassInput.classList.add("invalid")
        ConfirmPassInput.classList.remove("valid")
        InputDisable(true)
        ConfirmPass.disabled = false

    }else{
        ErrorMessage.textContent = ""
        ConfirmPassInput.classList.add('valid') 
        ConfirmPassInput.classList.remove('invalid')
        InputDisable(false) 
    }
    (()=>{
        ErrorMessage.textContent = ""
    })
}



function ValidateForm(){
    
    var name = document.getElementById("Name").value;
    var Password = document.getElementById("password").value
    var ConfirmPassword = document.getElementById("ConfirmPass").value
    var phone = document.getElementById("Phone").value
    var Dob = document.getElementById("Dob").value
    var email = document.getElementById("Email").value

    if(email && name && Password && phone && ConfirmPassword && Dob){
        document.getElementById("SubmitButton").disabled  = false
        
    }else{
        document.getElementById("SubmitButton").disabled  = true
        
    }
    
}

function showSuccessMessage() {
    document.getElementById("registrationForm").style.display = "none"; 
    document.getElementById("successMessage").style.display = "flex"; 
    document.getElementById("successMessage").style.justifyContent = "center"; 
}


function validateSubmit() {
    var name = document.getElementById("Name").value;
    var Password = document.getElementById("password").value
    var ConfirmPassword = document.getElementById("ConfirmPass").value
    var phone = document.getElementById("Phone").value
    var Dob = document.getElementById("Dob").value
    var email = document.getElementById("Email").value
    
    var isFormValid = true;
    
    if(email && name && Password && phone && ConfirmPassword && Dob){
        isFormValid = true
    }else{
        isFormValid = false
    }
    
    if (isFormValid ) {
        
        document.getElementById("successMessage").style.display = "flex";
    }
}

function InputDisable(value){

    document.getElementById("Name").disabled =  value
    document.getElementById("password").disabled = value
    document.getElementById("ConfirmPass").disabled = value
    document.getElementById("Phone").disabled = value
    document.getElementById("Dob").disabled = value
    document.getElementById("Email").disabled = value

}
