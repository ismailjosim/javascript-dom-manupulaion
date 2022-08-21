// ===========> Select Element
const selectBtn = document.querySelectorAll('#btn-select');
const tableBody = document.getElementById('table-body');

const playerArr = [];

// ==========> Click Me function
const clickMe = function (element) {
    const targetParent = element.parentNode; // target parent

    const title = targetParent.children[0].innerText; // get player name

    const playerObj = { playerName: title }; // make player an object.

    playerArr.push(playerObj); // Push products in an array

    console.log(playerArr.length);// add products length

};
