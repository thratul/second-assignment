// First part

function addition(a, b) { return a + b }
function subtraction(a, b) { return a - b }
function multiplication(a, b) { return a * b }
function division(a, b) { if (b === 0) { return "Error: Division by zero is not allowed" } return a / b }

// Part Two, Three, Four

function calculator(operation, firstDigit, secondDigit) {
    if (typeof firstDigit !== "number" || typeof secondDigit !== "number")
        return "Error: Invalid number input"

    if (operation === "add") { return addition(firstDigit, secondDigit) }
    if (operation === "subtract") { return subtraction(firstDigit, secondDigit) }
    if (operation === "multiply") { return multiplication(firstDigit, secondDigit) }
    if (operation === "divide") { return division(firstDigit, secondDigit) }
    else { return "Error: Invalid Operation" }

}
// Test Code

console.log(calculator("add", 10, 5));

console.log(calculator("subtract", 10, 5));

console.log(calculator("multiply", 4, 3));

console.log(calculator("divide", 20, 4));

console.log(calculator("divide", 10, 0));

console.log(calculator("invalid", 5, 3));