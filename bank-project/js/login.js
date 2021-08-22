document.getElementById('login-id').addEventListener('click', function () {
    // get email
    const emailField = document.getElementById('email-id');
    const userEmail = emailField.value;
    
    // get password shortcut
    const userPassword = document.getElementById('password-id').value;
    
    //get user password long method

    // const passwordField = document.getElementById('password-id');
    // const userPassword = passwordField.value;
    // console.log(userPassword);
    if (userEmail == 'email@email.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
    else {
        alert('Please enter correct email or password');
    }
})

