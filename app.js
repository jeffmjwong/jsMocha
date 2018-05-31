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
  it("Should substract two numbers together", () => {
    // eg. substract(10, 6) should equal 4
    const c = new Calculator
    assert.equal(4, c.substract(10, 6));
    assert.equal(3, c.substract(9, 6));
  })
})
