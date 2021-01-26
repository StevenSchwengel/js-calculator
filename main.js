var valArr = [];
var valArr2 = [];

var previousNum = 0;
var amount = 0

var initNum = 1;
var initOpr = 1;
var initialOperator;
//var initOpr = "";
var operator = "";

var curn;
var fcurn;
var firstAmount = 0;


var total;

var operators = ["+", "-", "=", "*", "/", "clear", "plus-minus", "percent"];
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', alertValue);
}

function alertValue(event) {
  const buttonValue = event.target.value;
  var firstUp = buttonValue;
  valArr.push(buttonValue);
  isOperatora(buttonValue);
  isNo(buttonValue);
  updateDisplay(buttonValue);
}

function updateDisplay(buttonValue) {
  var yyy = curn;
   document.querySelector(".calculator-screen").innerHtml = buttonValue;
   }

function isNo(buttonValue) {
  var n = operators.includes(buttonValue);
  if (n == false) {
    valArr2.push(buttonValue);
    curn = valArr2.join("");
    console.log(buttonValue);
  } else {
    initialOperator = buttonValue;
    console.log('operator to follow');
    console.log(initialOperator);
    initNum = initNum + 1;
  }
}

function isOperatora(buttonValue) {
  var n = operators.includes(buttonValue);
  if (n == true) {
    valArr2 = [];
    console.log(curn);

    if (buttonValue === 'clear'){
      operator = 'clear';
      console.log(initNum, firstAmount, fcurn);
      initNum = 0, firstAmount = 0, fcurn = 0;
      console.log(initNum, firstAmount, fcurn);
      console.log("c activated");


    }


    if (initNum === 1) {
      console.log('doing first Math push');
      firstAmount = curn;
      console.log(firstAmount);
    }

    if (initNum === 2) {
      console.log('doing second Math push');
      console.log(curn);
    }

    if (initNum >= 3) {
      firstAmount = total;
    }
  }


  if (initOpr === 1) {
    initialOperator = buttonValue;
    initOpr = initOpr + 1;
  }

  firstAmount = parseFloat(firstAmount);
  fcurn = parseFloat(curn);

   if (initNum >= 2) {

    if (initialOperator === '-') {
      operator = "-";
      subtract(firstAmount, fcurn);
    }

    if (initialOperator === '+') {
      operator === "+";
      addition(firstAmount, fcurn);
    }

    if (initialOperator === '/') {
      operator = "/";
      division(firstAmount, fcurn);
    }

    if (initialOperator === '*') {
      operator = "*";
      multiplaction(firstAmount, fcurn);
    }
  }


  if (buttonValue === '=') {
    console.log('grand total');
    console.log(total);
    console.log(initNum, firstAmount, fcurn);
    initNum = 0, firstAmount = 0, fcurn = 0;
    console.log(initNum, firstAmount, fcurn);
    console.log("clear activated");
    }

}
function addition(firstAmount, fcurn) {
  total = firstAmount + fcurn;
  return total;
}

function subtract(firstAmount, fcurn) {
  total = firstAmount - fcurn;
  return total;
}

function multiplaction(firstAmount, fcurn) {
  total = (firstAmount * fcurn);
  return total;
}

function division(firstAmount, fcurn) {
  total = (firstAmount / fcurn);
  return total;
}

function percent(firstAmount, fcurn) {
  total = (.01 * firstAmount);
  return total;
}

function plusminus(firstAmount, fcurn) {
  total = firstAmount + -fcurn;
  return total;
}
