// let screen = document.getElementById('input');
// buttons = document.querySelectorAll('button');
// let inp = '';
// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         btnTxt = e.target.innerText;
//         if (btnTxt == 'C') {
//             inp = "";
//             input.value = inp;
//         }
//         else if (btnTxt == '=') {
//             input.value = eval(inp);
//         }
//         else {
//             inp += btnTxt;
//             input.value = inp;
//         }
//     })
// }








// class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//         this.previousOperandTextElement = previousOperandTextElement
//         this.currentOperandTextElement = currentOperandTextElement
//         this.clear()
//     }

//     clear() {
//         this.currentOperand = ''
//         this.previousOperand = ''
//         this.operation = undefined
//     }

//     appendNumber(number) {
//         if (number === '.' && this.currentOperand.includes('.')) return
//         this.currentOperand = this.currentOperand.toString() + number.toString()
//     }

//     chooseOperation(operation) {
//         if (this.currentOperand === '') return
//         if (this.previousOperand !== '') {
//             this.compute()
//         }
//         this.operation = operation
//         this.previousOperand = this.currentOperand
//         this.currentOperand = ''
//     }

//     compute() {
//         let computation
//         const prev = parseFloat(this.previousOperand)
//         const current = parseFloat(this.currentOperand)
//         if (isNaN(prev) || isNaN(current)) return
//         switch (this.operation) {
//             case '+':
//                 computation = prev + current
//                 break
//             case '-':
//                 computation = prev - current
//                 break
//             case '*':
//                 computation = prev * current
//                 break
//             case '÷':
//                 computation = prev / current
//                 break
//             default:
//                 return
//         }
//         this.currentOperand = computation
//         this.operation = undefined
//         this.previousOperand = ''
//     }

//     updateDisplay() {
//         this.currentOperandTextElement.innerText = this.currentOperand
//         if (this.operation != null) {
//             this.previousOperandTextElement.innerText =
//                 `${this.previousOperand} ${this.operation}`
//         } else {
//             this.previousOperandTextElement.innerText = ''
//         }
//     }
// }

// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const allClearButton = document.querySelector('[data-all-clear]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]')

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay()
//     })
// })

// operationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.chooseOperation(button.innerText)
//         calculator.updateDisplay()
//     })
// })

// equalsButton.addEventListener('click', button => {
//     calculator.compute()
//     calculator.updateDisplay()
// })

// allClearButton.addEventListener('click', button => {
//     calculator.clear()
//     calculator.updateDisplay()
// })




"use strict";

var input = document.getElementById('input'),
    number = document.querySelectorAll('.numbers'),
    operator = document.querySelectorAll('.operators'),
    result = document.getElementById('result'),
    clear = document.getElementById('clear'),
    resultDisplayed = false;

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {

        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if (resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }

    });
}

for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function (e) {

        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0) {
            console.log("enter a number first");
        } else {
            input.innerHTML += e.target.innerHTML;
        }

    });
}

result.addEventListener("click", function () {

    var inputString = input.innerHTML;

    var numbers = inputString.split(/\+|\-|\×|\÷/g);

    var operators = inputString.replace(/[0-9]|\./g, "").split("");

    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log("----------------------------");


    var divide = operators.indexOf("÷");
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }

    var multiply = operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    var subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");
    while (add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }

    input.innerHTML = numbers[0];

    resultDisplayed = true;
});

clear.addEventListener("click", function () {
    input.innerHTML = "";
})