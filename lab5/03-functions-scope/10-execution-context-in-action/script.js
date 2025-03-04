//  Go to 'sources' tab and add a breakpoint at the first line and step through to see the execution phase in action
const x = 500;
const y = 250;

function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(100, 50);

console.log(sum1, sum2);
