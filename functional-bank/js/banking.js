// Get Input Value 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    // getting deposited amount and convert to floating number 
    const amountValue = inputField.value;
    const inputedAmount = parseFloat(amountValue);
    // clear the input field 
    inputField.value = '';
    // clear withdraw Input value 
    // withdrawInput.value = '';
    return inputedAmount;
}
// Update Total Field 
function updateTotalField(totalFieldId, inputedAmount) {
    const totalAmount = document.getElementById(totalFieldId);
    const previousTotalText = totalAmount.innerText;
    const previousTotal = parseFloat(previousTotalText);

    // summing up new deposit totat with previous 
    totalAmount.innerText = previousTotal + inputedAmount;
}
// get current balance 
function getCurrentBalance() {
    // adding deposited amount to balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
// Update Balance 
function updateBalance(depositedAmout, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    
    // adding deposited amount to balance 
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositedAmout;
        
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositedAmout;
    }
    // summing balance with deposited amount 
    
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositedAmout = getInputValue('deposit-input');
    if (depositedAmout > 0) {
        updateTotalField('deposit-dashboard', depositedAmout);
        updateBalance(depositedAmout, true);
    }
    
})

// withdraw button handle  (using shortcut method)
document.getElementById('withdraw-btn').addEventListener('click', function () {
    
    
    // getting withdraw dashboard amount 
    const withdrawInput = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawInput > 0 && currentBalance > withdrawInput) {
        updateTotalField('withdraw-dashboard', withdrawInput);
        updateBalance(withdrawInput, false);
    }
    if (withdrawInput > currentBalance) {
        console.log('You have to withdraw bellow $', currentBalance);
        alert('Your account balance execeds');
    }
        
    
})








        /*******************************
         * Hard Coded Code Copy
         *******************************/

// document.getElementById('deposit-btn').addEventListener('click', function () {
//     const depositInputAmount = document.getElementById('deposit-input');
//     // getting deposited amount and convert to floating number 
//     const depositInputAmountText = depositInputAmount.value;
//     const depositedAmout = parseFloat(depositInputAmountText);

//     // showing deposit amout to deposit dashboard
//     const depositTotal = document.getElementById('deposit-dashboard');
//     const previousDepositTotalText = depositTotal.innerText;
//     const previousDepositTotal = parseFloat(previousDepositTotalText);

//     // summing up new deposit totat with previous 
//     const newDepositTotal = previousDepositTotal + depositedAmout;
//     depositTotal.innerText = newDepositTotal;

//     // adding deposited amount to balance 
//     const balanceTotal = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText);
//     // summing balance with deposited amount 
//     const newBalanceTotal = previousBalanceTotal + depositedAmout;
//     // showing new balance to dashboard 
//     balanceTotal.innerText = newBalanceTotal;
//     console.log(newBalanceTotal);

//     // clear the input field 
//     depositInputAmount.value = '';
// })

// // withdraw button handle  (using shortcut method)
// document.getElementById('withdraw-btn').addEventListener('click', function () {
//     const withdrawInput = document.getElementById('withdraw-input');
//     // getting withdraw input amount 
//     // const withdrawInputAmount = withdrawInput.value;
//     // getting withdraw dashboard amount 
//     const withdrawDashoardTotal = document.getElementById('withdraw-dashboard');
//     // const previousWithdrawTotal = withdrawDashoardTotal.innerText;

//     const newWithdrawTotal = parseFloat(withdrawInput.value) + parseFloat(withdrawDashoardTotal.innerText);
//     // setting up new withdraw amount 
//     withdrawDashoardTotal.innerText = newWithdrawTotal;
//     // setting up new balance 
//     const balanceTotal = document.getElementById('balance-total');
//     // subtruct withdraw amount from balance 
//     const newBalanceTotal = parseFloat(balanceTotal.innerText) - parseFloat(withdrawInput.value);
//     // update new balance 
//     balanceTotal.innerText = newBalanceTotal;

    
//     // clear withdraw Input value 
//     withdrawInput.value = '';
// })