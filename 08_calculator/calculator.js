const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(values) {
  let sum = 0;
	for (let num of values) {
    sum += num;
  }
  return sum;
};

const multiply = function(values) {
  let multiple = 1;
  for (let num of values) {
    multiple *= num;
  }
  return multiple;
};

const power = function(a, b) {
  let pow = 1;
	for (let i = 1; i <= b; i++) {
    pow *= a;
  }
  return pow;
};

const factorial = function(num) {
	let answer = 1;
  for (let i = 1; i <= num; i++) {
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
