// 1. คำนวณพื้นที่วงกลม (Sequential Algorithm)
function calculateCircumference() {
    let radius = document.getElementById("radius").value;
    if (radius <= 0 || radius === "") {
        document.getElementById("circumferenceResult").innerText = "ใส่จำนวนเต็มบวกสิจ๊ะ!!";
        return;
    }
    let circumference = 2 * Math.PI * radius;
    document.getElementById("circumferenceResult").innerText = "Circumference: " + circumference.toFixed(2);
}

// 2. If-Else (Conditional Algorithm)
function checkAge() {
    let age = document.getElementById("age").value;
    if (age === "" || age <= 0) {
        document.getElementById("ageResult").innerText = "ฮันแน่!!";
        return;
    }
    if (age >= 120) {
        document.getElementById("ageResult").innerText = "บ้าไปแล้ว!";
        return;
    }
    if (age >= 100) {
        document.getElementById("ageResult").innerText = "คุณรอดมาได้ยังไง!";
        return;
    }
    let category = age < 13 ? "เด็ก" : age < 20 ? "วัยรุ่น" : age < 60 ? "ผู้ใหญ่" : "วัยชรา";
    document.getElementById("ageResult").innerText = "Category: " + category;
}

// 3. ตรวจสอบเลขคู่/เลขคี่
function checkEvenOdd() {
    let numberInput = document.getElementById("number").value;
    if (numberInput === "") {
        document.getElementById("evenOddResult").innerText = "โปรดใส่เลข";
        return;
    }
    let number = parseInt(numberInput);
    let result = number % 2 === 0 ? "เลขคู่" : "เลขคี่";
    document.getElementById("evenOddResult").innerText = "Result: " + result;
}

// 4. Sorting Algorithm - Bubble Sort
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function generateRandomSort() {
    let randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    let sortedAsc = bubbleSort([...randomNumbers]);
    let sortedDesc = [...sortedAsc].reverse();
    document.getElementById("sortedNumbers").innerText = `Original Numbers: ${randomNumbers.join(", ")}\nSorted Ascending: ${sortedAsc.join(", ")}\nSorted Descending: ${sortedDesc.join(", ")}`;
}

// Loop Algorithm Examples

// 1. For Loop to show numbers 1 to 10
function forLoopExample() {
    let result = [];
    for (let i = 1; i <= 10; i++) {
        result.push(i);
    }
    document.getElementById("forLoopResult").innerText = "Numbers from 1 to 10: " + result.join(", ");
}

// 2. While Loop to get user input until "exit" is typed
function whileLoopExample() {
    let userInput = "";
    let allInputs = [];
    while (userInput.toLowerCase() !== "exit") {
        userInput = prompt("Enter something (type 'exit' to stop):");
        if (userInput.toLowerCase() !== "exit") {
            allInputs.push(userInput);
        }
    }
    document.getElementById("whileLoopResult").innerText = "Your Inputs: " + allInputs.join(", ");
}

// Recursive Algorithms

// 1. Factorial function
function calculateFactorial() {
    let n = parseInt(document.getElementById("factorialInput").value);
    let result;
    try {
        if (n < 0) {
            result = "Unable to calculate for negative numbers.";
        } else if (n === 0) {
            result = 1;
        } else {
            result = factorial(n);
        }
    } catch (error) {
        result = "Error calculating factorial.";
    }
    document.getElementById("factorialResult").innerText = "Factorial: " + result;
}

// Factorial Recursive Function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// 2. Fibonacci Sequence with Recursion
function calculateFibonacci() {
    let n = parseInt(document.getElementById("fibonacciInput").value);
    let result;
    try {
        if (n < 0) {
            result = "Unable to calculate for negative numbers.";
        } else {
            result = fibonacci(n);
        }
    } catch (error) {
        result = "Error calculating Fibonacci sequence.";
    }
    document.getElementById("fibonacciResult").innerText = "Fibonacci: " + result;
}

// Fibonacci Recursive Function
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Debugging Example
function testDebugging() {
    let testVar = 10;
    try {
        console.log("Testing Debugging...");
        // Debugging using console.log
        console.log("The value of testVar is: ", testVar);
        if (testVar < 0) {
            throw new Error("testVar cannot be negative");
        }
        document.getElementById("debuggingResult").innerText = "Debugging complete. Check the console for logs.";
    } catch (error) {
        document.getElementById("debuggingResult").innerText = "Error: " + error.message;
    }
}
