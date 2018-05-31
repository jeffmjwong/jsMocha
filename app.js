const assert = require('assert')
const { Calculator } = require('./calculator.js');

describe("Add", () => {
  it("Should add two numbers together", () => {
    // eg. add(1, 2) should equal 3
    const c = new Calculator
    assert.equal(3, c.add(1, 2));
    assert.equal(5, c.add(3, 2));
  })
})

describe("Substract", () => {
  it("Should substract first number by second number", () => {
    // eg. substract(10, 6) should equal 4
    const c = new Calculator
    assert.equal(4, c.substract(10, 6));
    assert.equal(3, c.substract(9, 6));
  })
})

describe("Division", () => {
  it("Should divide first number by second number ", () => {
    // eg. substract(10, 6) should equal 4
    const c = new Calculator
    assert.equal(2, c.divide(10, 5));
    assert.equal((9 / 6), c.divide(9, 6));
  })
})
