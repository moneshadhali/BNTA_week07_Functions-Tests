const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 9540000000;
    actual = sum(4770000000, 4770000000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -50;
    actual = sum(-25, -25);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 0;
    actual = sum(0, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test("can substract two positive numbers", () =>{
    expected = 60;
    actual = subtract(100, 40);
    expect(actual).toBe(expected);
  })

  test("can substract two negative numbers", () =>{
    expected = 0;
    actual = subtract(-25, -25);
    expect(actual).toBe(expected);
  })
});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
