// ===========> Select Element
const selectBtn = document.querySelectorAll('#btn-select');
const tableBody = document.getElementById('table-body');


const playerArr = [];
//============> Show selected player
const selectedPlayer = function (players) {
    tableBody.innerHTML = ''; // make tableBody box empty

    for (let i = 0; i < players.length; i++) {// looping over the players array of object

        const playerName = players[i].name; // get array name.

        const tableRow = document.createElement('tr'); // Create Table row(tr) element

        tableRow.innerHTML = `<td>${ i + 1 }</td><td>${ playerName }</td>`; // innerHTML ==> tableRow

        tableBody.appendChild(tableRow); // Show tableRow ==> tableBody

    }
};

// ==========> Click Me function
const clickMe = function (element) {
    const targetParent = element.parentNode; // target parent

    const title = targetParent.children[0].innerText; // get player name

    const playerObj = { name: title }; // make player an object.

    playerArr.push(playerObj); // Push products in an array

    selectedPlayer(playerArr);

};
