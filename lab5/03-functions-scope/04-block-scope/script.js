const x = 100;

// An If statement is a block
if (true) {
  console.log(x);
  const y = 300;
  console.log(x + y);
}

// console.log(y); // ReferenceError: y is not defined

// A loop is a block
for (let i = 0; i <= 15; i++) {
  console.log(i);
}

// console.log(i); // ReferenceError: i is not defined

// Using var
if (true) {
  const a = 600;
  let b = 700;
  var c = 800;
}

console.log(c);

// var IS function scoped
function run() {
  var d = 200;
  console.log(d);
}

run();

// console.log(d);


const foo = 1;
var bar = 2; // Put on the window object
