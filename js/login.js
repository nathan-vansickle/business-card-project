'use strict';

const users = new Map();

/*-----ELEMENTS-----*/
const loginButton = document.getElementById('login-button');
const emailField = document.getElementById('email-field');
const passwordField = document.getElementById('password-field');

const signupButton = document.getElementById('signup-button');
const signupEmailField = document.getElementById('signup-email-field');
const signupPasswordField = document.getElementById('signup-password-field');

function checkCreds() {
    const email = emailField.value;
    const password = passwordField.value;

    if (users.has(email) && users.get(email) == password) {
        alert('correct');
        // Go to user page
    } else {
        alert('Invalid email or password');
    }
}

function addUser() {
    const email = signupEmailField.value;
    const password = signupPasswordField.value;

    if (users.has(email)) {
        alert('Email already in use. Please enter a different email address.');
    } else {
        users.set(email, password);
        // Go to card creation wizard
    }
    
}

loginButton.addEventListener('click', checkCreds);
signupButton.addEventListener('click', addUser)
