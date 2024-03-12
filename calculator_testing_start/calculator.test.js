const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  isEvenOrOdd,
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
    expect(actual).toEqual(expected);
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

  test("can substract a negative and a positive numbers", () =>{
    expected = -30;
    actual = subtract(-25, 5);
    expect(actual).toBe(expected);
  })

  test("can substract two large numbers", () =>{
    expected = 7489999108;
    actual = subtract(9835678095, 2345678987);
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
  test("can divide two negative numbers", () =>{
    expected = 8.78;
    actual = divide(-588, -67);
    expect(actual).toBeCloseTo(expected, 2);
  })

  test("can divide two positive numbers", () =>{
    expected = 5;
    actual = divide(10, 2);
    expect(actual).toBe(expected);
  })

  test("can not divide two zero numbers", () =>{
    expected = NaN;
    actual = divide(0, 0);
    expect(actual).toBeNaN();
  })

  test("can divide a big negative and a positive numbers", () =>{
    expected = -65.33;
    actual = divide(-588, 9);
    expect(actual).toBeCloseTo(expected, 2);
  })
});

describe('modulus', () => {
  test("can do modulus to two positive numbers", () =>{
    expected = 0;
    actual = modulus(10, 2);
    expect(actual).toBe(expected);
  })

  test("can do modulus to two negative numbers", () =>{
    expected = -1;
    actual = modulus(-456, -5);
    expect(actual).toBe(expected);
  })

  test("can do modulus to two large numbers", () =>{
    expected = 1088897;
    actual = modulus(87655434567, 8765434567);
    expect(actual).toBe(expected);
  })

  test("can do modulus to two zero numbers", () =>{
    expected = NaN;
    actual = modulus(0, 0);
    expect(actual).toBeNaN();
  })
});

describe('even', () => {
  test("can produce even when there's a positive number", () =>{
    expected = "even";
    actual = isEvenOrOdd(2);
    expect(actual).toBe(expected);
  })

  test("can produce even when there's a negative number", () =>{
    expected = "even";
    actual = isEvenOrOdd(-2);
    expect(actual).toBe(expected);
  })

  test("can return false when there's a positive number", () =>{
    expected = "odd";
    actual = isEvenOrOdd(7);
    expect(actual).toBe(expected);
  })

  test("can return false when there's a negative number", () =>{
    expected = "odd";
    actual = isEvenOrOdd(-7);
    expect(actual).toBe(expected);
  })

  test("can return true when there's a zero number", () =>{
    expected = "even";
    actual = isEvenOrOdd(0);
    expect(actual).toBe(expected);
  })
});

describe('odd', () => {
  test("can produce odd when there's a positive number", () =>{
    expected = "odd";
    actual = isEvenOrOdd(3);
    expect(actual).toBe(expected);
  })

  test("can produce odd when there's a negative number", () =>{
    expected = "odd";
    actual = isEvenOrOdd(-3);
    expect(actual).toBe(expected);
  })

  test("can return false when there's a positive number", () =>{
    expected = "even";
    actual = isEvenOrOdd(6);
    expect(actual).toBe(expected);
  })

  test("can return false when there's a negative number", () =>{
    expected = "even";
    actual = isEvenOrOdd(-6);
    expect(actual).toBe(expected);
  })

});
