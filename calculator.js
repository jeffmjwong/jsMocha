class Calculator {
  add(...args) {
    let answer = 0;
    args.forEach(num => answer += num);
    return answer;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return a / b;
  }
}

module.exports = { Calculator };
