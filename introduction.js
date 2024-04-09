document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.loginBtn');
    const popuplogin = document.querySelector('.popuplogin');
    const btnclose = document.querySelector('.btnclose');
    const loginForm = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
  
    loginBtn.addEventListener('click', function() {
        popuplogin.style.display = 'flex';
    });
  
    btnclose.addEventListener('click', function() {
        popuplogin.style.display = 'none';
    });
  
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
  
        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;
  
        // Check if username and password are correct (for simplicity, hardcoded here)
        if (enteredUsername === 'admin' && enteredPassword === 'admin') {
            // Redirect to the next page
            window.location.href = 'intro2.html';
        } else {
            // Clear input fields and show error message (you can implement your own error handling logic here)
            usernameInput.value = '';
            passwordInput.value = '';
            alert('Incorrect username or password. Please try again.');
        }
    });
  });