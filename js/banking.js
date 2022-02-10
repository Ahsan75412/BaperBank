
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


})