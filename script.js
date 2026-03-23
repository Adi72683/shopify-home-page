console.log("===== JAVASCRIPT OUTPUT =====");


var a = 10;
let b = 20;
const c = 30;
console.log("Variables:", a, b, c);


let x;
x = 5;
let y = 15;
console.log("Declaration:", x, y);


add1(5, 3);

function add1(a, b) {
  console.log(a + b);
}


let globalVar = "I am global";

function scopeTest() {
  var funcVar = "I am function scoped";

  if (true) {
    let blockVar = "I am block scoped";
    console.log("Block Scope:", blockVar);
  }

  console.log("Function Scope:", funcVar);
}

scopeTest();


let str = "Hello";
let num = 100;
let bool = true;
let n = null;
let u;

let obj = { name: "Adi" };
let arr = [1, 2, 3];

console.log("Data Types:", str, num, bool, n, u);
console.log("Object & Array:", obj, arr);


let person = {
  name: "Adi",
  age: 22,
  greet: function () {
    return "Hello " + this.name;
  }
};

console.log("Object:", person.name, person.greet());


let numbers = [10, 20, 30];
numbers.push(40);
numbers.pop();

console.log("Array:", numbers);
console.log("First Element:", numbers[0]);


console.log("Implicit:", "5" + 2, "5" - 2);

let num1 = Number("123");
let str1 = String(123);
let bool1 = Boolean(1);

console.log("Explicit:", num1, str1, bool1);


for (let i = 0; i < 3; i++) {
  console.log("For Loop:", i);
}

let i = 0;
while (i < 3) {
  console.log("While Loop:", i);
  i++;
}


let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid");
}

// OPERATORS
let sum = 10 + 5;
let assign = 10;
assign += 5;

console.log("Comparison:", 5 == "5", 5 === "5");
console.log("Logical:", true && false, true || false);

let result = age >= 18 ? "Adult" : "Minor";
let full = "Hello" + " World";
let comma = (1, 2, 3);

console.log("Operators:", sum, assign, result, full, comma);


function greet() {
  return "Hello";
}
console.log("Function:", greet());

let sayHi = function () {
  return "Hi";
};
console.log("Function Expression:", sayHi());

// ARROW FUNCTIONS
const add = (a, b) => a + b;
const square = x => x * x;

console.log("Arrow:", add(5, 3), square(4));

// COMBINED
function processData(value) {
  let num = Number(value);

  if (num > 10) {
    for (let i = 0; i < num; i++) {
      if (i % 2 === 0) {
        console.log("Even:", i);
      }
    }
  } else {
    console.log("Value too small");
  }
}

processData("15");

console.log("===== END =====");