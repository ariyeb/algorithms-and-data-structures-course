function sumOfNumbers(num) {
    console.log(num);
    if (num === 1) return 1;

    return num + sumOfNumbers(num - 1);
}

// console.log(sumOfNumbers(9));

function power(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;

    return base * power(base, exponent - 1);
}

function factorial(num) {
    if (num <= 1) return 1;

    return num * factorial(num - 1);
}
// 3*2*1

function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;

    return isPalindrome(str.slice(1, str.length - 1));
}

// console.log(isPalindrome("abcdcbja"));

function getOddNumbersFromArray(arr) {
    let result = [];
    const helper = (array) => {
        if (array.length === 0) return;
        if (array[0] % 2 !== 0) result.push(array[0]);

        return helper(array.slice(1));
    };
    helper(arr);

    return result;
}

// console.log(getOddNumbersFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 1, 1, 2, 3, 5
function fibIterative(position) {
    if (position <= 0) return;
    if (position <= 2) return 1;

    let el1 = 1, el2 = 1, currentVal;
    for (let i = 3; i <= position; i++) {
        currentVal = el1 + el2;
        el1 = el2;
        el2 = currentVal;
    }
    return currentVal;
}

function wrongFib(position) {
    console.log(position);
    if (position <= 0) return;
    if (position <= 2) return 1;

    return fib(position - 1) + fib(position - 2);
}

function fib(position) {
    const values = {};

    const getValAtposition = (pos) => {
        console.log(pos);
        if (pos <= 0) return;
        if (pos <= 2) return 1;

        if (values[pos] == undefined) {
            values[pos] = getValAtposition(pos - 1) + getValAtposition(pos - 2);
        }
        return values[pos];
    };

    return getValAtposition(position);
}

// console.log(fibIterative(5));
// console.log(fib(5));

function solveExpression(expression) {
    console.log(expression);
    let openingBracket = -1, closingBracket = -1;
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === "(") {
            openingBracket = i;
            continue;
        }
        if (expression[i] === ")") {
            closingBracket = i;
            break;
        }
    }

    if (openingBracket !== -1) {
        const newExpression = expression.slice(0, openingBracket).concat(
            solveExpression(expression.slice(openingBracket + 1, closingBracket)),
            expression.slice(closingBracket + 1)
        );
        return solveExpression(newExpression);
    }

    const getResult = (num1, num2, operator) => {
        switch (operator) {
            case "*":
                return num1 * num2;
            case "/":
                return num1 / num2;
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
        }
    };

    const shortExpression = (startIndex, endIndex, operatorIndex) => {
        const result = getResult(
            parseFloat(expression.slice(startIndex, operatorIndex)),
            parseFloat(expression.slice(operatorIndex + 1, endIndex)),
            expression[operatorIndex]
        );
        return expression.slice(0, startIndex).concat(result, expression.slice(endIndex));
    };

    let startIndex = 0, endIndex = expression.length, operatorIndex = -1;
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === "*" || expression[i] === "/") {
            if (operatorIndex === -1) operatorIndex = i;
            else {
                endIndex = i;
                break;
            }
        }

        if (expression[i] === "+" || expression[i] === "-") {
            if (operatorIndex === -1) startIndex = i + 1;
            else {
                endIndex = i;
                break;
            }
        }
    }

    if (operatorIndex !== -1) {
        return solveExpression(shortExpression(startIndex, endIndex, operatorIndex));
    }

    startIndex = 0;
    endIndex = expression.length;
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === "+" || expression[i] === "-") {
            if (operatorIndex === -1) operatorIndex = i;
            else {
                endIndex = i;
                break;
            }
        }
    }

    if (operatorIndex !== -1) {
        return solveExpression(shortExpression(startIndex, endIndex, operatorIndex));
    }

    return parseFloat(expression);
}
// console.log(solveExpression("(36+6)/(6/(1+1))"));

function getJson(val) {

}

const val = { a: { c: true, d: undefined, e: { f: 1, g: "hello" } }, b: [1, null, 3, { h: 8 }, undefined] };
console.log(JSON.stringify(val));

