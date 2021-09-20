const GridButtons = document.querySelectorAll('.tip-calculator__grid-button');
const GridInput = document.querySelector('.tip-calculator__grid-input');
const TipAmount = document.querySelector('.tip-calculator__input_type_tip-amount');
console.log(TipAmount);
const TotalAmount = document.querySelector('.tip-calculator__input_type_total');
console.log(TotalAmount);
const BillAmount = document.querySelector('.tip-calculator__input_type_dollars');
const TotalPeople = document.querySelector('.tip-calculator__input_type_people');
const ResetButtton = document.querySelector('tip-calculator__reset');
const Inputs = document.querySelectorAll('.tip-calculator__input');
console.log(Inputs);
let TipPercent = 0;
let PeopleAmount = TotalPeople.value;
let BillDollars = BillAmount.value;
let Tip = '';


function CalculateTotal() {
    console.log("Tip Calculate")
    console.log( parseFloat(Tip) + parseFloat(BillDollars))
    TotalAmount.textContent = "$" + Math.round( (( ( parseFloat( Tip ) + parseFloat( BillDollars ) ) / PeopleAmount ) * 100)) / 100;

}


//TotalAmount.textContent = parseInt(TipAmount.value) / parseInt(TotalPeople.value)

// Calculate tip amount / person with grid buttons
function CalculateTip() {
console.log("CalculateTip()")
Tip = (TipPercent * BillDollars) / PeopleAmount;
console.log(Tip);

TipAmount.textContent = "$" + ((Tip * 100) / 100);
CalculateTotal();
}

function CheckForValues() {
    console.log("CheckForValues()")
    console.log(BillDollars, TipPercent, PeopleAmount);
    if (BillDollars > 0 && TipPercent > 0 && PeopleAmount > 0) {
    
    CalculateTip(); 
    }  

}

function HandleGridButtonClick(event) {
    TipPercent = parseFloat(event.target.value);
    console.log(TipPercent);
    CheckForValues();
}

function HandleTotalPeopleInput(event) {
    PeopleAmount = parseInt(event.target.value);
    console.log(PeopleAmount);
    CheckForValues();
}

function HandleBillAmountInput(event) {
    BillDollars = parseInt(event.target.value);
    console.log(BillDollars);
    CheckForValues();
}

// ON PAGE LOAD
GridButtons.forEach( function (GridButton) {
    GridButton.addEventListener('click', HandleGridButtonClick);
} );

TotalPeople.addEventListener('change', HandleTotalPeopleInput);
BillAmount.addEventListener('change', HandleBillAmountInput);

CalculateTip();

//TotalAmount.textContent = parseInt(TipAmount.value) / parseInt(TotalPeople.value)

//Clear Inputs
function ClearInputs() {
    BillAmount.value = '';
    TotalPeople.value = '';
    //TipAmount.value = '';
    //TotalAmount.value = '';
}


//Reset Button
ResetButtton.addEventListener('submit', (event) => {
    let messages = [];
    if (TotalPeople.value === 0 || TotalPeople.value === "") {
        messages.push("Can't be zero")
    }
})