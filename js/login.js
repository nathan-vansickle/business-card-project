'use strict';

const users = new Map();

/*-----ELEMENTS-----*/
const loginButton = document.getElementById('login-button');
const emailField = document.getElementById('email-field');
const passwordField = document.getElementById('password-field');

function checkCreds() {
    const email = emailField.value;
    const password = passwordField.valuel;

    console.log(email);
    console.log(password);
}

loginButton.addEventListener('click', checkCreds);