// 'window' is globally scoped
// alert('Hello');
// console.log(innerWidth);

// Global scope variable
const x = 200;

console.log(x, 'in global');

function run() {
  // Access global vars in functions
  console.log(window.innerHeight);
  console.log(x, 'in function');
}

run();

// Access global vars in blocks
if (true) {
  console.log(x, 'in block');
}

function add() {
  // Overwriting global x (variable shadowing)
  const x = 5;
  const y = 100;
  console.log(x + y);
}

// Can not access a function scoped variable in global scope
console.log(y);

add();
