// IFFE Syntax (Has it's own scope and runs right away)
(function () {
  const user = 'Dum';
  console.log(user);
  const hello = () => console.log('Hi from the IIFE');
  hello();
})();

// Params
(function (name) {
  console.log('Hello ' + name);
})('Sleep');

// Named IIFE (Can only be called recursively)
(function hello() {
  console.log('Hello');
})();
