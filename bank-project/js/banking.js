// Handle Deposit button 
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get the amount deposited 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmountText);
    // push the deposited amount to deposit 
    const depositTotal = document.getElementById('deposit-dashboard');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    // converting from string to number 
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    
    
    // clear the deposit input field 
    depositInput.value = '';
    withdrawInput.value = '';
    
})
// Withdraw button handle 
    document.getElementById('withdraw-btn').addEventListener('click', function () {
        // getting input withdraw 
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawInputText = withdrawInput.value;
        const withdrawInputNumber = parseFloat(withdrawInputText);
        // getting current withdraw amount 
        const withdrawAmount = document.getElementById('withdraw-dashboard');
        const withdrawAmountText = withdrawAmount.innerText;
        
        const previousWithdrawAmount = parseFloat(withdrawAmountText);
        // new withdraw amount after withdraw
        const currentWithdrawAmount = previousWithdrawAmount + withdrawInputNumber;
        
        withdrawAmount.innerText = currentWithdrawAmount;

        // update balance 
        const previousBalanceTotal = document.getElementById('balance-total');
        const previousBalanceTotalText = previousBalanceTotal.innerText;
        const previousBalanceTotalNumber = parseFloat(previousBalanceTotalText);
        const currentTotalBalance = previousBalanceTotalNumber - withdrawInputNumber;
        previousBalanceTotal.innerText = currentTotalBalance;

        // update new balanace 


        // clear the withdraw input field 
    
        withdrawInput.value = '';
        
    })