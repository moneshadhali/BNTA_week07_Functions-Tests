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

  test("can multiply two negative numbers", () =>{
    expected = 25;
    actual = multiply(-5, -5);
    expect(actual).toBe(expected);
  })

  test("can multiply two positive numbers", () =>{
    expected = 100;
    actual = multiply(10, 10);
    expect(actual).toBe(expected);
  })

  test("can multiply two large numbers", () =>{
    expected = 2394400000;
    actual = multiply(400000 , 5986);
    expect(actual).toBe(expected);
  })

  test("can multiply zero numbers", () =>{
    expected = 0;
    actual = multiply(0, 0);
    expect(actual).toBe(expected);
  })

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
