/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let selectedDays = [];
let dayCounter = 0;
let cost_per_day = 35;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// initialize event listeners for each day button




function calculateTotalCost() {
    const totalCost = cost_per_day * dayCounter;
    document.getElementById('calculated-cost').textContent = totalCost;
    return totalCost
    }


function handleDayClick(event) {
    let clickedDay = event.target;
    if (!clickedDay.classList.contains('clicked')) {
    clickedDay.classList.add('clicked');
    selectedDays.push(clickedDay.id);
    dayCounter++;
    calculateTotalCost();
    }
    }

    const dayButtons = document.querySelectorAll('.day-selector li');
    dayButtons.forEach(dayButton => {
    dayButton.addEventListener('click', handleDayClick);
    });


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.



  
function handleClearClick() {
    let dayButtons = document.querySelectorAll('.day-selector li');
    dayButtons.forEach(dayButton => {
    dayButton.classList.remove('clicked');
    });
    selectedDays = [];
    dayCounter = 0;
    calculateTotalCost();
    }
  
    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', handleClearClick);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


function handleHalfDayClick() {
    cost_per_day = 20;
    const halfButton = document.getElementById('half');
    const fullButton = document.getElementById('full');
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    calculateTotalCost();
    }
const halfButton = document.getElementById('half');

halfButton.addEventListener('click', handleHalfDayClick);



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


function handleFullDayClick() {
    cost_per_day = 35;
    const halfButton = document.getElementById('half');
    const fullButton = document.getElementById('full');
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    calculateTotalCost();
    }

// let cost_per_day = 35
const fullButton = document.getElementById('full');
fullButton.addEventListener('click', handleFullDayClick);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
    // calculate the total cost based on the dayCounter and cost_per_day variables
    const totalCost = dayCounter * cost_per_day;
    
    // set the innerHTML of the calculated-cost element to the totalCost value
    document.getElementById('calculated-cost').innerHTML = totalCost;
  }