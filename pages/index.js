const GridButtons = document.querySelectorAll('.tip-calculator__grid-button');
const GridInput = document.querySelector('.tip-calculator__grid-input');
const TipAmount = document.querySelector('.tip-calculator__input_type_tip-amount');
const TotalAmount = document.querySelector('.tip-calculator__input_type_total');
const TipDollars = document.querySelector('.tip-calculator__input_type_dollars');
const TotalPeople = document.querySelector('.tip-calculator__input_type_people');

// Calculate tip amount / person with grid buttons
function CalculateTip() {
TipAmount.textContent = (GridButtons.value * TipAmount.value) / TotalPeople.value;

}

CalculateTip();

TotalAmount.textContent = TipAmount.value / TotalPeople.value

