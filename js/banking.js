
//deposit some money section here

document.getElementById('deposit-button').addEventListener('click',function(){
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newdDepositAmountText = depositInput.value;
    const newdDepositAmount = parseFloat(newdDepositAmountText);

// update deposit Total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount  + newdDepositAmount;
    depositTotal.innerText = newDepositTotal; 


//update balance Total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newdDepositAmount;
    balanceTotal.innerText = newBalanceTotal;





    //clear the deposit input fields

    depositInput.value = '';


});



// handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);


    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText) ;

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;


    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear withdraw input field
    
    withdrawInput.value = '';



});








