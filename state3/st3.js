function changeColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function hoverEffect(element) {
    element.style.color = "blue";
}

function resetHover(element) {
    element.style.color = "black";
}

function logInput(element) {
    console.log("User typed: " + element.value);
    document.getElementById("displayText").textContent = "You typed: " + element.value;
}

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    if (!email.includes("@") || !email.endsWith(".com")) {
        alert("Invalid email format. Please include '@' and end with '.com'");
        return;
    }
    
    alert("Form submitted successfully!\nName: " + name + "\nEmail: " + email);
});

document.getElementById("alertBtn").addEventListener("click", function() {
    alert("คุณคลิกปุ่ม!");
});
