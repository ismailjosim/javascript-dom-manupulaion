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
    countPlayer += 1;

    const targetParent = element.parentNode;
    const title = targetParent.children[0].innerText;
    const tableRow = document.createElement('tr');

    if (countPlayer > 5) {
        alert('Please Add only 5 players!');
    } else {
        tableRow.innerHTML = `<tr><th>0${ countPlayer }</th><td>${ title }</td></tr>`;
        tableBody.appendChild(tableRow);
        element.style.backgroundColor = "gray";
        element.setAttribute("disabled", "true");
    }
};
//===> get input value
const getInputNumber = function (element) {
    const elementStr = element.value;
    const convertNumber = parseFloat(elementStr);

    if (isNaN(convertNumber) !== true && convertNumber !== 0 && convertNumber > 0) {
        return convertNumber;
    }
};
//===> get inner Text
const getInnerNumber = function (element) {
    const elementStr = element.innerText;
    const convertNumber = parseFloat(elementStr);

    if (isNaN(convertNumber) !== true && convertNumber !== 0) {
        return convertNumber;
    }
};
//===> calculation function
btnCalculate.addEventListener('click', function () {
    const selectPlayerList = document.querySelectorAll('tr');
    const playerListNumber = selectPlayerList.length;
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
//===> Total Expenses Calculation Button
btnTotalCalc.addEventListener('click', function () {
    const playerPerCost = getInnerNumber(totalPerPlayerExp);
    const managerCost = getInputNumber(managerFees);
    const coachCost = getInputNumber(coachFees);
    const TotalBalance = playerPerCost + managerCost + coachCost;

    if (isNaN(playerPerCost) === true) {
        alert('Per Player Expenses is not Valid ⚠');
    } else if (isNaN(managerCost) === true) {
        alert('⚠ PLEASE! Add A Valid Manager Amount');
    } else if (isNaN(coachCost) === true) {
        alert('⚠ Coach Fees is not Valid');
    }
    else {
        finalPlayerExp.innerText = TotalBalance;
    }
});
