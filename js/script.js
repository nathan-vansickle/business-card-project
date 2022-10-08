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
    const html = generateHTML();

    businessCards.innerHTML += html;
}

function generateHTML(name, company, pos, phone, ) {
    const html = `
    <div class="card">
        <div class="card-data" id="card-data">
            <h1 id="name">Name</h1>
            <p>Company</p>
            <p>Position</p>
            <p>XXX-XXX-XXXX</p>
            <p>me@domain.com</p>
            <p>LinkedIn</p>
        </div>
    </div>`

    return html;
}

async function getJSON() {
    const requestURL = null;
}

button.addEventListener('click', updateCardList);