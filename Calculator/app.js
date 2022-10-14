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
var statusCalc = "number";

console.log(clear.innerText);

numbers.forEach((element) => {
  element.addEventListener("click", function () {
    //Om jag har tryckt på operator en gång, rensa fältet
    //för att skriva nästa

    if (notFirstTimeOperator && trycktOperator) {
      display.innerText = "";
      trycktOperator = false;
    }
    display.innerText += element.innerText;
    currentDisplay += display.innerText;
    statusCalc = "number";
  });
});

clear.addEventListener("click", function () {
  console.log("display: " + display.innerText);
  display.innerText = "";
  currentDisplay = "";
  firstOperator = "";
  firstnumber = 0;
  secondnumber = 0;
  notFirstTimeOperator = false;
});
//10+20 + 30 10 +
operators.forEach((element) => {
  element.addEventListener("click", function () {
    //Gå in här endast om man har knappat in nummer
    if (statusCalc == "number") {
      operator = element.innerText;
      trycktOperator = true;
      if (notFirstTimeOperator) {
        if (calculationMade) {
        }
        secondnumber = display.innerText;
        display.innerText = "";
        calculate(firstnumber, firstOperator, operator, secondnumber);
        firstnumber = calculatededAnswer;
        if (operator != "=") firstOperator = operator;
      } else {
        //Gör detta första gången man har skrivit
        //ett nummer och tryckt på en operator
        firstnumber = display.innerText;
        notFirstTimeOperator = true;
        firstOperator = element.innerText;
      }
      statusCalc = "calculation";
    } else {
      //Ingen uträkning, spara endast den senast
      //tryckta operatorn
      firstOperator = element.innerText;
    }
  });
});

function calculate(firstnumber, firstOperator, operator, secondnumber) {
  switch (firstOperator) {
    case "+":
      answer = parseFloat(firstnumber) + parseFloat(secondnumber);
      console.log(answer);
      break;
    case "-":
      answer = parseFloat(firstnumber) - parseFloat(secondnumber);
      console.log(answer);
      break;
    case "/":
      answer = parseFloat(firstnumber) / parseFloat(secondnumber);
      console.log(answer);
      break;
    case "*":
      answer = parseFloat(firstnumber) * parseFloat(secondnumber);
      console.log(answer);
      break;
    default:
  }

  display.innerText = answer;
  calculationMade = true;
  secondnumber = "";
  calculatededAnswer = answer;
}
