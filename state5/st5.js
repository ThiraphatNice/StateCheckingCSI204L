document.addEventListener("DOMContentLoaded", function() {
    const subjects = ["CSI101", "CSI102", "CSI203", "CSI204", "CSI305"];
    let gradeInputs = document.getElementById("gradeInputs");
    subjects.forEach(sub => {
        let div = document.createElement("div");
        div.innerHTML = `${sub} คะแนน: <input type='number' id='${sub}' min='0' max='100'>`;
        gradeInputs.appendChild(div);
    });
    loadTodos();
});

function addTodo() {
    let input = document.getElementById("todoInput");
    let todoList = JSON.parse(localStorage.getItem("todos")) || [];

    if (!input.value) return;

    if (todoList.includes(input.value)) {
        alert("ใส่รายการเดิมซ้ำไม่ได้");
        return;
    }

    todoList.push(input.value);
    localStorage.setItem("todos", JSON.stringify(todoList));
    input.value = "";
    displayTodos();
}

function displayTodos() {
    let list = document.getElementById("todoList");
    let todoList = JSON.parse(localStorage.getItem("todos")) || [];
    list.innerHTML = "";
    todoList.forEach((todo, index) => {
        let li = document.createElement("li");
        li.textContent = todo;
        let removeBtn = document.createElement("button");
        removeBtn.textContent = " ลบ";
        removeBtn.onclick = function () {
            todoList.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(todoList));
            displayTodos();
        };
        li.appendChild(removeBtn);
        list.appendChild(li);
    });
}

function clearTodos() {
    localStorage.removeItem("todos");
    displayTodos();
}

function loadTodos() {
    displayTodos();
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
            data.slice(0, 10).forEach(user => {
                let li = document.createElement("li");
                li.textContent = `${user.name} - ${user.email}`;
                userList.appendChild(li);
            });
        });
}

function searchUserById() {
    let userId = prompt("ใส่เลขไอดีที่ต้องการค้นหา");
    if (!userId || isNaN(userId) || parseInt(userId) <= 0) {
        alert("โปรดใส่เลขไอดีที่ถูกต้อง");
        return;
    }
    
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) throw new Error("ไม่พบผู้ใช้ โปรดใส่เพียงเลข 1-10");
            return response.json();
        })
        .then(user => {
            let userList = document.getElementById("userList");
            userList.innerHTML = "";
            let li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        })
        .catch(error => alert(error.message));
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
        errorMessage.textContent = "โปรดใส่เลข 6 หลัก";
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
