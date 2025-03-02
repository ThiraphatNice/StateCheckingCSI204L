document.addEventListener("DOMContentLoaded", function() {
    const subjects = ["CSI101", "CSI102", "CSI203", "CSI204", "CSI305"];
    let gradeInputs = document.getElementById("gradeInputs");
    subjects.forEach(sub => {
        let div = document.createElement("div");
        div.innerHTML = `${sub} คะแนน: <input type='number' id='${sub}' min='0' max='100'>`;
        gradeInputs.appendChild(div);
    });
    loadTodos();  // Load existing todos from localStorage
});

function addTodo() {
    let input = document.getElementById("todoInput");
    let list = document.getElementById("todoList");

    if (input.value) {
        let todoList = JSON.parse(localStorage.getItem("todos")) || [];  // Get existing todos from localStorage
        todoList.push(input.value);  // Add new todo item

        // Save updated list back to localStorage
        localStorage.setItem("todos", JSON.stringify(todoList));

        // Clear input field
        input.value = "";
        displayTodos();
    }
}

function displayTodos() {
    let list = document.getElementById("todoList");
    let todoList = JSON.parse(localStorage.getItem("todos")) || [];

    list.innerHTML = "";  // Clear the current list

    todoList.forEach((todo, index) => {
        let li = document.createElement("li");
        li.textContent = todo;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = " ลบ";
        removeBtn.onclick = function () {
            todoList.splice(index, 1);  // Remove item from the array
            localStorage.setItem("todos", JSON.stringify(todoList));  // Save updated list
            displayTodos();  // Re-display updated list
        };

        li.appendChild(removeBtn);
        list.appendChild(li);
    });
}

function clearTodos() {
    localStorage.removeItem("todos");
    displayTodos();  // Clear the displayed list
}

function loadTodos() {
    displayTodos();  // Load todos when the page is loaded
}

function calculateGPA() {
    const subjects = ["CSI101", "CSI102", "CSI203", "CSI204", "CSI305"];
    let totalPoints = 0;
    let validSubjects = 0;

    subjects.forEach(sub => {
        let score = Number(document.getElementById(sub).value);

        if (score >= 0 && score <= 100) {  // Check if the input is within the valid range
            let grade = 0;
            if (score < 50) {
                grade = 0;
            } else if (score >= 50 && score <= 54) {
                grade = 1;
            } else if (score >= 55 && score <= 59) {
                grade = 1.5;
            } else if (score >= 60 && score <= 64) {
                grade = 2;
            } else if (score >= 65 && score <= 69) {
                grade = 2.5;
            } else if (score >= 70 && score <= 74) {
                grade = 3;
            } else if (score >= 75 && score <= 79) {
                grade = 3.5;
            } else if (score >= 80) {
                grade = 4;
            }

            totalPoints += grade;
            validSubjects++;
        } else {
            alert("กรุณาใส่คะแนนที่ถูกต้องในแต่ละวิชา (0-100)");
        }
    });

    if (validSubjects > 0) {
        let gpa = (totalPoints / validSubjects).toFixed(2);
        document.getElementById("gpaResult").textContent = `GPA: ${gpa}`;
    } else {
        document.getElementById("gpaResult").textContent = "กรุณากรอกคะแนนในทุกวิชา";
    }
}

function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            let userList = document.getElementById("userList");
            userList.innerHTML = "";
            data.slice(0, 5).forEach(user => {
                let li = document.createElement("li");
                li.textContent = `${user.name} - ${user.email}`;
                userList.appendChild(li);
            });
        });
}

function generateLottery() {
    let lotteryInput = document.getElementById("lotteryGuess");
    let number = Math.floor(100000 + Math.random() * 900000); // สุ่มเลข 6 หลัก
    document.getElementById("lotteryNumber").textContent = number;

    let guess = lotteryInput.value;
    let errorMessage = document.getElementById("errorMessage");

    // ตรวจสอบว่าเลขที่กรอกมีความยาว 6 หลัก
    if (guess.length !== 6) {
        document.getElementById("lotteryResult").textContent = "";
        errorMessage.textContent = "โปรดใส่เลข 6 หลักเท่านั้น";
        return;
    }

    // ตรวจสอบว่าเลขที่กรอกเป็นตัวเลขทั้งหมด
    if (isNaN(guess)) {
        document.getElementById("lotteryResult").textContent = "";
        errorMessage.textContent = "กรุณาใส่เลขเป็นตัวเลขเท่านั้น";
        return;
    }

    // ลบข้อความผิดพลาดหากกรอกเลขถูกต้อง
    errorMessage.textContent = "";

    // เปรียบเทียบเลขที่กรอกกับเลขที่สุ่ม
    document.getElementById("lotteryResult").textContent = (guess == number) ? "ถูกต้อง!" : "ผิด!";
}
