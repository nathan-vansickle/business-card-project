"use strict";

/*---------------USER PAGE---------------*/
const currentUser = undefined;

/*---ELEMENTS--- */
const button = document.getElementById('btn');
const numberField = document.getElementById("number");
const businessCards = document.querySelector('.business-cards');


function updateCardList() {
    const cardId = numberField.value;
    addCard(cardId);
}

 async function addCard(number) {
    let cardObject = await getJSON(number);

    console.log(cardObject.company);
    const html = generateHTML(cardObject);

    businessCards.innerHTML += html;
}

function generateHTML(cardObject) {
    const html = `
    <div class="card">
        <div class="card-data" id="card-data">
            <h1 id="name">` + cardObject.name + `</h1>
            <p>` + cardObject.company + `</p>
            <p>` + cardObject.position + `</p>
            <p>` + cardObject.phone + `</p>
            <p>` + cardObject.email + `</p>
            <p>` + cardObject.linkedIn + `</p>
        </div>
    </div>`

    return html;
}

async function getJSON(cardNumber) {
    const requestURL = "https://raw.githubusercontent.com/nathan-vansickle/business-card-project/main/json/" + cardNumber + ".json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const cardObject = await response.json();

    console.log(cardObject.company);
    return cardObject;
}

function displayUserCard(currentUser) {
    // Iterate thru the array of card identifiers associated with the current user and display them
}

button.addEventListener('click', updateCardList);





/*---------------LOGIN---------------*/

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
        document.getElementById('user-header').style.display = 'block';
        document.querySelector('.number-field').style.display = 'block';
        businessCards.style.display = 'block';

        document.querySelector('.login-fields').style.display = 'none';
        document.querySelector('.signup-fields').style.display = 'none';
        document.getElementById('login-header').style.display = 'none';
        document.getElementById('signup-header').style.display = 'none';

        currentUser = email;
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
        document.getElementById('creator-header').style.display = 'block';
        document.querySelector('.form').style.display = 'block';

        document.querySelector('.login-fields').style.display = 'none';
        document.querySelector('.signup-fields').style.display = 'none';
        document.getElementById('login-header').style.display = 'none';
        document.getElementById('signup-header').style.display = 'none';

    }
    
}

loginButton.addEventListener('click', checkCreds);
signupButton.addEventListener('click', addUser)

/*--------------CARD CREATOR--------------*/
let name = undefined;
let company = undefined;
let position = undefined;
let email = undefined;
let linkedIn = undefined;
let phone = undefined;

/*-----ELEMENTS-----*/
const nameField = document.getElementById('name');
const companyField = document.getElementById('company');
const positionField = document.getElementById('position');
const phoneField = document.getElementById('phone');
const linkedInField = document.getElementById('linkedIn');

const createButton = document.getElementById('form-button');

function createCard() {

    console.log("boink");
    if(nameField.value.length == 0) {

        alert("You must provide a name to continue");

    } else if(companyField.value.length == 0) {

        alert("You must provide a company to continue");

    } else if(positionField.value.length == 0) {

        alert("You must provide a position to continue");

    } else if(phoneField.value.length == 0) {

        alert("You must provide a phone number to continue");

    } else if(linkedInField.value.length == 0) {

        alert("You must provide a linkedIn profile to continue");

    } else {

        name = nameField.value;
        company = companyField.value;
        position = positionField.value;
        phone = phoneField.value;
        linkedIn = linkedInField.value;

        document.getElementById('creator-header').style.display = 'none';
        document.querySelector('.form').style.display = 'none';

        document.getElementById('user-header').style.display = 'block';
        document.querySelector('.number-field').style.display = 'block';
        businessCards.style.display = 'block';

    }

}

createButton.addEventListener('click', createCard);
