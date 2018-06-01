const { Calculator } = require('./calculator.js')

const c = new Calculator

test('adds 1 + 2 to equal 3', () => {
  expect(c.add(1, 2)).toBe(3);
});

test('adds 1 + 2 + 3 to equal 6', () => {
  expect(c.add(1, 2, 3)).toBe(6);
});

test('adds 5 to equal 5', () => {
  expect(c.add(5)).toBe(5);
});

test('adds nothing to equal 0', () => {
  expect(c.add()).toBe(0);
});

test('subtract 10 - 6 to equal 4', () => {
  expect(c.subtract(10, 6)).toBe(4);
});

test('divide 10 / 5 to equal 2', () => {
  expect(c.divide(10, 5)).toBe(2);
})

test('divide 10 / 0 to equal Infinity', () => {
  expect(c.divide(10, 0)).toBe(Infinity);
})
