const form = document.getElementById('form');
const username = document.getElementById('username');
const gender = document.getElementById('dob');
const address = document.getElementById('address');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm');
const agreement = document.getElementById('agreement');
const btn = document.getElementById('submit');


form.addEventListener('submit', (e) => {

    checkInput();

    console.log(formValid());
    if(formValid() == true){
        form.submit();
     }
     
    else {
         e.preventDefault();
    }
    

});

function formValid(){
    const formCntrl = form.querySelectorAll('.form-control');
    const agreementValue = agreement.value.trim();
    let result = true;
    formCntrl.forEach((container) =>{
        if(container.classList.contains('error')){
            result = false;
        }
    });

    if(!agreement.checked){
        alert('You must agree to the terms first.');
       result = false;
    }
    else{
        console.log("Checkbox selected: ", agreement.checked);

    }

    return result;
}

function checkInput(){
    const usernameValue = username.value.trim();
    const dobValue = dob.value.trim();
    const addressValue = address.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPassValue = confirmPass.value.trim();

    if(usernameValue == ''){
        setErrorFor(username, 'Name cannot be blank');
        
        
    }
    else if(usernameValue.length < 2){
        setErrorFor(username, 'Must be 2 character or more');
    }

    else{
        setSuccesFor(username);
       
    }

    if(dobValue == ""){
        setErrorFor(dob, 'Set your DOB');
      
    }
    else{
        setSuccesFor(dob);
    }

    if(addressValue == ''){
        setErrorFor(address, 'Address cannot be blank');
       
    }
    else{
        setSuccesFor(address);
    }

    
    if(phoneValue == ''){
        setErrorFor(phone, 'Address cannot be blank');
        
        
    }
    else{
        setSuccesFor(phone);
    }

    if(emailValue == ''){
        setErrorFor(email, 'Email cannot be blank');
        
    
    }
    else if (!isEmail(emailValue)){
        setErrorFor(email, 'Not a valid email');
        
       
    }
    else{
        setSuccesFor(email);
    }

    if(passwordValue == ''){
        setErrorFor(password, 'Password cannot be blank');

    }
  
    else if(passwordValue < 8){
        setErrorFor(password, 'Your password must be at least 8 characters');
    }
  
    else if (!validatePass(passwordValue)){
        setErrorFor(password, 'Must Contain combination of uppercase, lowercase and numbers between 8 and 10 char');
    }
    else{
        setSuccesFor(password);
    }

    if(confirmPassValue == ''){
        setErrorFor(confirmPass, 'Password Cannot be blank');  
    }

    else if(passwordValue !== confirmPassValue) {
		setErrorFor(confirmPass, 'Passwords does not match');
    }
    else{
        setSuccesFor(confirmPass);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    if(formControl.classList.contains('success')){
        formControl.classList.remove('success');
    }

    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  
}

function setSuccesFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
    if(formControl.classList.contains('error')){
        formControl.classList.remove('error');
    }
    formControl.classList.add('success');
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validatePass(password){
	return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/.test(password);
}

