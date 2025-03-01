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
    let list = document.getElementById("todoList");
    if (input.value) {
        let li = document.createElement("li");
        li.textContent = input.value;
        
        let removeBtn = document.createElement("button");
        removeBtn.textContent = " ลบ";
        removeBtn.onclick = function () {
            list.removeChild(li);
            saveTodos();
        };
        
        li.appendChild(removeBtn);
        list.appendChild(li);
        saveTodos();
        input.value = "";
    }
}

function saveTodos() {
    let list = document.getElementById("todoList").innerHTML;
    localStorage.setItem("todos", list);
}

function loadTodos() {
    let list = document.getElementById("todoList");
    list.innerHTML = localStorage.getItem("todos") || "";
    Array.from(list.children).forEach(li => {
        let removeBtn = document.createElement("button");
        removeBtn.textContent = " ลบ";
        removeBtn.onclick = function () {
            list.removeChild(li);
            saveTodos();
        };
        li.appendChild(removeBtn);
    });
}

function clearTodos() {
    let list = document.getElementById("todoList");
    list.innerHTML = "";
    localStorage.removeItem("todos");
}

function calculateGPA() {
    let total = 0;
    subjects.forEach(sub => {
        total += Number(document.getElementById(sub).value);
    });
    document.getElementById("gpaResult").textContent = (total / (subjects.length * 3)).toFixed(2);
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
    let number = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("lotteryNumber").textContent = number;
    let guess = document.getElementById("lotteryGuess").value;
    document.getElementById("lotteryResult").textContent = (guess == number) ? "ถูกต้อง!" : "ผิด!";
}
