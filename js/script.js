"use strict";

let i = 1;

//---ELEMENTS---
const button = document.getElementById('btn');
const numberField = document.getElementById("number");
const businessCards = document.querySelector('.business-cards');


function updateCardList() {
    const cardId = numberField.value;
    addCard(cardId);
}

function addCard(number) {
    const cardObject = getJSON(number);
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

    return cardObject;
}

button.addEventListener('click', updateCardList);
