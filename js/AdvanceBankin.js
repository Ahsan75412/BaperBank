
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear the deposit input fields
    inputField.value = '';
    return amountValue;

}

// add and update totalfields

function updateTotalField(totalFieldId, amount) {

    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotalAmount = parseFloat(totalText);
    const getNewTotal = previousTotalAmount + amount;
    totalElement.innerText = getNewTotal;

}


function getCurrentBalance(){
     //update balance Total
     const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
    
     return previousBalanceTotal;

}


function updateBalance(amount, isAdd) {

    //update balance Total
    const balanceTotal = document.getElementById('balance-total');
  
    const previousBalanceTotal = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}






//deposit some money section here

document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited

    const DepositAmount = getInputValue('deposit-input');//call fun()
 
    if (DepositAmount > 0){
   //get an update
    updateTotalField('deposit-total', DepositAmount); //call 2nd fun()
    //update balance Total
    updateBalance(DepositAmount, true);//3rd fun()

    }

  





});



// handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function () {

    const WithdrawAmount = getInputValue('withdraw-input');

    const currentBalance = getCurrentBalance();
    if(WithdrawAmount > 0 && WithdrawAmount < currentBalance){
    //set withdraw total
    updateTotalField('withdraw-total', WithdrawAmount);
    //update balance
    updateBalance(WithdrawAmount, false); //3rd fun()

    }

    if(WithdrawAmount > currentBalance){
        console.log('you can not withdraw more than that u have in account!!');
    }


});
