// ||= assigns the right side value only if the left is a falsy value.

let a = null;

// if (!a) {
//   a = 10;
// }

// a = a || 10;

a ||= 10;

console.log(a);

// &&= assigns the right side value only if the left is a truthy value.

let b = 30;

if (b) {
  b = 20;
}

b = b && 50;

b &&= 20;

console.log(b);

// ??= assigns the right side value only if the left is null or undefined.

let c = null;

if (c === null || c === undefined) {
  c = 20;
}

c = c ?? 20;

c ??= 10;

console.log(c);
