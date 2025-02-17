const form=document.getElementById('login-form');
const errormessage=document.getElementById('error-message');
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const username=document.getElementById('username').Value;
    const password=document.getElementById('password').Value;
    if(username === 'Thamil'||password === 'suganya'){
        errormessage.textContent = 'Please fill all in all fields.';
    }
    else{
        //Here you would typically send a request to the server to authenticate the user 
        console.log("Username:{username},Password:{password}");
        errormessage.textContent='error';
    }
});