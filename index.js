const billingAmount = document.querySelector("#billamount");
const givenCash = document.querySelector("#givencash");
const checkBtn = document.querySelector("#check-button");
const msg = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".notes-num");

const notesAvail = [2000,500,100,20,10,5,1];

checkBtn.addEventListener("click", function validateBillAndCashAmount(){
    hideMsg();
    if(billingAmount.value > 0){
        if(givenCash.value >= billingAmount.value){
            const returnAmount = givenCash.value - billingAmount.value;
            calculateChange(returnAmount);

        } else{
            showMsg("Do you wanna wash Dishes ?");
            
        }
    }else{
        showMsg("Invalid Bill Amount");
        
    }
});

function calculateChange(returnAmount){
    for(let i = 0; i < notesAvail.length; i++){
        const numOfNotes = Math.trunc(returnAmount / notesAvail[i]);

        returnAmount  %= notesAvail[i];
        noOfNotes[i].innerText = numOfNotes;
    }

}

function hideMsg(){
    msg.style.display = "none";
}

function showMsg(msg){
    message.style.display = "block";
    message.innerText = msg;
}