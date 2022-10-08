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

function generateHTML() {
    const html = `
    <div class=\"card\">
        <div class=\"card-data\">
            <h1 id=\"name\">Name</h1>
        </div>
    </div>`

    return html;
}

button.addEventListener('click', updateCardList);