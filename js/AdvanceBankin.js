
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
      //clear the deposit input fields
      inputField.value = '';
    return amountValue;

}

// add and update totalfields

function updateTotalField( totalFieldId , amount){

    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotalAmount = parseFloat(totalText);
    const getNewTotal = previousTotalAmount  + amount;
    totalElement.innerText = getNewTotal; 

}


function updateBalance(amount ,isAdd){

    //update balance Total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + amount;
    balanceTotal.innerText = newBalanceTotal;

    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}




//deposit some money section here

document.getElementById('deposit-button').addEventListener('click',function(){
    //get the amount deposited

    const newdDepositAmount = getInputValue('deposit-input');//call fun()

 //get an update

    updateTotalField( 'deposit-total' , newdDepositAmount); //call 2nd fun()
//update balance Total

  updateBalance(newdDepositAmount , true);//3rd fun()


  


});



// handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click',function(){

    const newWithdrawAmount = getInputValue('withdraw-input');

    //set withdraw total
     updateTotalField('withdraw-total' , newWithdrawAmount);

    //update balance

    updateBalance(newWithdrawAmount , false);//3rd fun()



});
