// ===========> Select Element
const selectBtn = document.querySelectorAll('#btn-select');
const listItems = document.getElementById('list_items');
const btnCalculate = document.querySelector('#btn-calculate');
const tableBody = document.querySelector('#table-body');

const costPerPlayer = document.querySelector('#per-player-cost');
const managerFees = document.querySelector('#manager-fees');
const coachFees = document.querySelector('#coach-fees');

const totalPerPlayerExp = document.querySelector('#total-per-player-exp');
const btnTotalCalc = document.querySelector('#total-calc-btn');
const finalPlayerExp = document.querySelector('#total-exp');

//============> Show selected player
let countPlayer = 0;

const clickMe = function (element) {
    countPlayer += 1; // increase +1 every time call the function
    const targetParent = element.parentNode; // target parent
    const title = targetParent.children[0].innerText; // get player name
    const tableRow = document.createElement('tr'); // Create Table row(tr) element
    if (countPlayer > 5) {
        alert('Please Add only 5 players!');
    } else {
        tableRow.innerHTML = `<tr><th>0${ countPlayer }</th><td>${ title }</td></tr>`; // innerHTML ==> tableRow
        tableBody.appendChild(tableRow);
        // disable button
        element.style.backgroundColor = "gray";
        element.setAttribute("disabled", "true");
    }
};

// get input value
const getInputNumber = function (element) {
    const elementStr = element.value;
    const convertNumber = parseFloat(elementStr);

    if (isNaN(convertNumber) !== true && convertNumber !== 0) {
        return convertNumber;
    }

};
// get inner Text
const getInnerNumber = function (element) {
    const elementStr = element.innerText;
    const convertNumber = parseFloat(elementStr);
    if (isNaN(convertNumber) !== true && convertNumber !== 0 && convertNumber < 0) {
        return convertNumber;
    }
};

// calculation function
btnCalculate.addEventListener('click', function () {
    const selectPlayerList = document.querySelectorAll('tr');
    const playerListNumber = selectPlayerList.length;

    // get per player input value
    const perPlayerCost = getInputNumber(costPerPlayer);
    const totalPlayer = playerListNumber * perPlayerCost;

    if (selectPlayerList.length < 1) {
        alert('Player is not added ⚠');

    } else if (isNaN(perPlayerCost) === true) {

        alert('PLEASE! Add A Valid Number ⚠');
    } else {

        totalPerPlayerExp.innerText = totalPlayer;
    }
});

//=========> Total Expenses Calculation Button
btnTotalCalc.addEventListener('click', function () {
    const playerPerExp = getInnerNumber(totalPerPlayerExp);
    const manager = getInputNumber(managerFees);
    const coach = getInputNumber(coachFees);


    const TotalBalance = playerPerExp + manager + coach;

    if (isNaN(TotalBalance) === true) {
        alert('Player Expenses is not added ⚠');
    } else if (isNaN(TotalBalance) === true) {
        alert('⚠');
    }
    else {

        finalPlayerExp.innerText = TotalBalance;
    }
});
