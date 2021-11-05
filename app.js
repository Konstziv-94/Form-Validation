
const name =  document.querySelector('#name');
const pass1 =  document.querySelector('#password');
const pass2 = document.querySelector('#password-ckeck');
const submit =  document.querySelector('button');
const email =  document.querySelector('#email');



submit.addEventListener('click', function(e){
    e.preventDefault();
    
    const nameValue = name.value.trim(); 
    const passwordValue1 = pass1.value.trim();
    const passwordValue2 = pass2.value.trim();
    const emailValue = email.value.trim(); 
   
    if(nameValue=== ''){
        
        setErrorfor(name,'Username can not be blank')
    }else{
        setSuccessFor(name,)
    }

    // password
    if(passwordValue1=== ''){
        
        setErrorfor(pass1,'Password can not be blank')
    }else{
        setSuccessFor(pass1,)
    }

    if(passwordValue2=== ''){
        setErrorfor(pass2,'Password can not be blank')
    }else if (passwordValue1!==passwordValue2){
        setErrorfor(pass2,'Passwords does not mach')  
    }else{
        setSuccessFor(pass2)
    }





    // email
    if(emailValue=== ''){
        
        setErrorfor(email,'Email can not be blank')
    }else if (!validateEmail(emailValue)){
        setErrorfor(email,'this is not a email')
    }else{
        setSuccessFor(email,'email is ok')
    }
    
})

function setErrorfor(input,message){

    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText= message;
    formControl.className='form-control error'
  
}

function setSuccessFor(input,message){

    const formControl = input.parentElement;
    
    formControl.className='form-control success'
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}