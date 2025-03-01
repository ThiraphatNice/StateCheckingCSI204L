// 1. คำนวณพื้นที่วงกลม (Sequential Algorithm)
function calculateCircumference() {
    let radius = document.getElementById("radius").value;

    // Check if the input is an integer
    if (radius % 1 !== 0) {
        document.getElementById("circumferenceResult").innerText = "Please enter a valid integer for the radius.";
        return;
    }

    // Check if the radius is positive
    
    // if (radius <= 0) {
    //     document.getElementById("circumferenceResult").innerText = "Radius must be a positive integer.";
    //     return;
    // }

    let circumference = 2 * Math.PI * radius;
    document.getElementById("circumferenceResult").innerText = "Circumference: " + circumference.toFixed(2);
}


// 2. If-Else (Conditional Algorithm)
// function checkAge() {
//     let age = document.getElementById("age").value;

//     // Check for invalid input (0 or negative values)
//     if (age <= 0) {
//         document.getElementById("ageResult").innerText = "Age must be a positive number greater than 0.";
//         return;
//     }

//     let category = age < 13 ? "เด็ก" : age < 20 ? "วัยรุ่น" : "ผู้ใหญ่";
//     document.getElementById("ageResult").innerText = "Category: " + category;
// }

function checkAge() {
    let age = document.getElementById("age").value;

    // Check for invalid input (0 or negative values)
    if (age <= 0) {
        document.getElementById("ageResult").innerText = "Age must be a positive number greater than 0.";
        return;
    }

    let category;
    if (age < 13) {
        category = "เด็ก";
    } else if (age < 20) {
        category = "วัยรุ่น";
    } else if (age >= 60) {
        category = "วัยชรา";
    } else {
        category = "ผู้ใหญ่";
    }

    document.getElementById("ageResult").innerText = "Category: " + category;
}


function checkEvenOdd() {
    let number = parseInt(document.getElementById("number").value);
    let result;
    if (number === 0) {
        result = "เลขคู่";
    } else if (number % 2 === 0) {
        result = "เลขคู่";
    } else {
        result = "เลขคี่";
    }
    // if (number === 0) {
    //     result = "เลขศูนย์";
    // } else if (number % 2 === 0) {
    //     result = "เลขคู่";
    // } else {
    //     result = "เลขคี่";
    // }
    document.getElementById("evenOddResult").innerText = "Result: " + result;
}

// 3. Sorting Algorithm - Bubble Sort
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
    let sortedNumbers = bubbleSort(randomNumbers);
    document.getElementById("sortedNumbers").innerText = "Sorted Numbers: " + sortedNumbers.join(", ");
}

// 4. Recursive Algorithm
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

// 5. Debugging & Error Handling
try {
    let result = JSON.parse('{ "valid": true }');
    console.log(result);
} catch (error) {
    console.error("Error parsing JSON:", error);
} finally {
    console.log("Execution completed");
} 