let numbers = document.querySelectorAll(".number");
var display = document.querySelector(".displayField");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let operators = document.querySelectorAll(".operator");
var number = null;
var currentDisplay = "";
var firstOperator = "";
var process = false;
var firstnumber;
var calculatededAnswer = 1;
var secondnumber;
var notFirstTimeOperator = false;
var operator = "";
var trycktOperator = false;
var calculationMade = false;
var x;
var statusCalc = "calculation";
var clicked = true;
var lastOperator = ".minus";

numbers.forEach((elementNumber) => {
  elementNumber.addEventListener("click", function () {
    //Om jag har tryckt på operator en gång, rensa fältet
    //för att skriva nästa

    if (notFirstTimeOperator && trycktOperator) {
      display.innerText = "";
      trycktOperator = false;
    }
    display.innerText += elementNumber.innerText;
    currentDisplay += display.innerText;
    statusCalc = "number";
  });
});
//Rensa alla fält
clear.addEventListener("click", function () {
  display.innerText = "";
  currentDisplay = "";
  firstOperator = "";
  firstnumber = 0;
  secondnumber = 0;
  notFirstTimeOperator = false;
  document.querySelector(lastOperator).style.borderColor = "white";
});

operators.forEach((elementOperator) => {
  elementOperator.addEventListener("click", function () {
    //Ta bort markering från förra knappen
    document.querySelector(lastOperator).style.borderColor = "white";
    if(elementOperator.innerText == "%" 
    && !isNaN(display.innerText) ){
      display.innerText = display.innerText/100;
      firstnumber = display.innerText;
      //notFirstTimeOperator = true;
      //firstOperator = elementOperator.innerText;
    }

    //Gå in här endast om man har knappat in nummer
    if (statusCalc == "number" && elementOperator.innerText != "%") {
      operator = elementOperator.innerText;
      trycktOperator = true;
      if (notFirstTimeOperator) {
        if (calculationMade) {
        }
        secondnumber = display.innerText;
        display.innerText = "";
        calculate(firstnumber, firstOperator, secondnumber);
        firstnumber = calculatededAnswer;
        if (operator != "=") firstOperator = operator;
      } else {
        //Gör detta första gången man har skrivit
        //ett nummer och tryckt på en operator
        firstnumber = display.innerText;
        notFirstTimeOperator = true;
        firstOperator = elementOperator.innerText;
      }
      statusCalc = "calculation";
    } else if(elementOperator.innerText != "%") {
      //Ingen uträkning, spara endast den senast
      //tryckta operatorn
      firstOperator = elementOperator.innerText;
    }
    //Håll den intryckte knappen tills en ny knapp trycks
    elementOperator.style.borderColor = "blue";
    lastOperator = "." + elementOperator.classList[0];

    
  });
});

function calculate(firstnumber, firstOperator, secondnumber) {
  switch (firstOperator) {
    case "+":
      answer = parseFloat(firstnumber) + parseFloat(secondnumber);
      break;
    case "-":
      answer = parseFloat(firstnumber) - parseFloat(secondnumber);
      break;
    case "/":
      answer = parseFloat(firstnumber) / parseFloat(secondnumber);
      break;
    case "*":
      answer = parseFloat(firstnumber) * parseFloat(secondnumber);
      break;
    default:
  }

  display.innerText = Math.round(answer * 100000000000000) / 100000000000000;
  calculationMade = true;
  secondnumber = "";
  calculatededAnswer = Math.round(answer * 100000000000000) / 100000000000000;

}
