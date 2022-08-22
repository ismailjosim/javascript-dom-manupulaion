// ===========> Select Element
const selectBtn = document.querySelectorAll('#btn-select');
const btnCalculate = document.querySelector('#btn-calculate');
const listItems = document.getElementById('list_items');

// get value from selected players


//============> Show selected player
let countPlayer = 0;

const clickMe = function (element) {
    countPlayer += 1; // increase +1 every time call the function

    const targetParent = element.parentNode; // target parent
    const title = targetParent.children[0].innerText; // get player name
    const listItem = document.createElement('li'); // Create Table row(tr) element

    if (countPlayer > 5) {
        alert('Please Add only 5 players!');
    } else {
        listItem.innerHTML = `<p>0${ countPlayer }</p> <p>${ title }</p>`; // innerHTML ==> tableRow
        listItems.appendChild(listItem);

        // disable button
        element.style.backgroundColor = "gray";
        element.setAttribute("disabled", "true");
    }
};


const getPlayerNumber = function (element) {
    const elementParent = element.childNodes[1];
    const stringValue = elementParent.children[0].innerText;
    const intNumber = parseInt(stringValue);
    return intNumber;
};

// calculation function
btnCalculate.addEventListener('click', function () {
    const getNumberValue = getPlayerNumber(tableBody);
    const addPlayerNumber = getNumberValue.length;
    console.log(addPlayerNumber);
});
