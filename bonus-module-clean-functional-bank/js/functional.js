// get button it 
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');



// get input value from input field 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}
// get inner text value from input value or inner text 
function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

function updateTotal(fieldId, amount) {
    // const previousTotalTag = parseFloat(document.getElementById(fieldId).innerText);

    // const totalTag = document.getElementById(fieldId);
    // const previousTotalInText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalInText);
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
}
function updateBalance(amount, isAdding) {
    // const previousBalanceTag = parseFloat(document.getElementById('balance-total').innerText);
    const previousBalanceTag = getInnerTextValue('balance-total');
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalanceTag + amount;
    } else if (isAdding == false) {
        newBalance = previousBalanceTag - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}


depositBtn.addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-dashboard', amount);
        updateBalance(amount, true);
    }
    
})
withdrawBtn.addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance-100) {
        updateTotal('withdraw-dashboard', amount);
        updateBalance(amount, false);
    }
    else {
        alert('You must keep minium 100$ in balance');
    }
    
})