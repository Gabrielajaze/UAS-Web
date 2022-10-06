const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm');
const btn = document.getElementById('submit');


form.addEventListener('submit', (e) => {
    checkInput();

    console.log(formValid());
    if(formValid() == true){
        form.submit();
     }
     
    else{
         e.preventDefault();
    }
    
    
});

function formValid(){
    const formCntrl = form.querySelectorAll('.form-control');
    
    formCntrl.forEach((container) =>{
        if(container.classList.contains('error')){
            result = false;
        }
        else(
            result=true;
        )
    });

    return result;
}

function checkInput(){
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

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
    else if (!validatePass(passwordValue)){
        setErrorFor(password, 'Must Contain combination of uppercase, lowercase and numbers between 8 and 10 char');
    }
 
    else{
        setSuccesFor(password);
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

