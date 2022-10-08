"use strict";

const button = document.getElementById('btn');


function getCardID() {
    const cardId = document.getElementById("number").value;
    console.log(cardId);
}

button.addEventListener('click', getCardID);