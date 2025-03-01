document.getElementById("changeColorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("hoverText").addEventListener("mouseover", function() {
    this.style.color = "blue";
});

document.getElementById("hoverText").addEventListener("mouseout", function() {
    this.style.color = "black";
});

document.getElementById("inputBox").addEventListener("keyup", function() {
    console.log("User typed: " + this.value);
});

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