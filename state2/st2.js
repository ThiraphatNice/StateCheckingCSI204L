// ฟังก์ชันสำหรับแสดงผลทั้งใน console และหน้าเว็บ
function displayOutput(label, data) {
    console.log(label, data);
    const outputDiv = document.getElementById("output");
    const p = document.createElement("p");
    p.textContent = `${label} ${JSON.stringify(data)}`;
    outputDiv.appendChild(p);
}

// พื้นฐานของตัวแปรและชนิดข้อมูล
displayOutput("--- Data Types ---", "");
let str = "Hello, World!";
let num = 42;
let bool = true;
displayOutput("String:", str);
displayOutput("Integer:", num);
displayOutput("Boolean:", bool);

// ทดสอบการแปลงชนิดข้อมูล
displayOutput("--- Type Conversion ---", "");
displayOutput("int(\"10\"):", parseInt("10"));
displayOutput("float(\"3.14\"):", parseFloat("3.14"));
displayOutput("str(100):", String(100));

// สร้างและใช้งานโครงสร้างข้อมูล
displayOutput("--- List / Array ---", "");
let arr = [1, 2, 3];
arr.push(4);
arr.splice(1, 1);
arr[0] = 10;
displayOutput("Array:", arr);

// Dictionary / Object
displayOutput("--- Dictionary / Object ---", "");
let student = { name: "Tom", age: 20, grade: "A" };
displayOutput("Student:", student);

// Tuple & Set
displayOutput("--- Tuple & Set ---", "");
let tuple = ["A", "B", "C"];
let set = new Set([1, 2, 2, 3, 3, 4]);
displayOutput("Tuple:", tuple);
displayOutput("Set (unique values):", [...set]);

// จัดการ JSON Data
displayOutput("--- JSON Data ---", "");
let jsonData = JSON.stringify(student);
displayOutput("JSON String:", jsonData);
let parsedData = JSON.parse(jsonData);
displayOutput("Parsed JSON:", parsedData);
