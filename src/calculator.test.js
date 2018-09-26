import Calculator from './calculator';
// This is just a brief introdution of Jest
// It does not need any configurations.
// you just need to name the file as the class to be tested, and add calculator.test.js as the 

/*
Common Matchers
The simplest way to test a value is with exact equality. 
expect().toBe();
*/
// test add
it('Add: 1 adds 2 should equal to 3', () =>{
  const calculator = new Calculator();
  expect(calculator.add(1,2)).toBe(3);
});
// not equals to 
it('Add: 2 adds 2 should not equal to 3', () => {
  const calculator = new Calculator();
  expect(calculator.add(2,2)).not.toBe(3);
});

// test substraction
it('Subtraction: 1 substraction 2 should equal to -1', () =>{
  const calculator = new Calculator();
  expect(calculator.subtraction(1,2)).toBe(-1);
});


// branch coverage

it('Division, if b equals to 0, result should be 0', () => {
  const calculator = new Calculator();
  expect(calculator.division(1,0)).toBe(0);
  expect(calculator.division(4,2)).toBe(2);
});


// Error, multiply function is wrong
// expect is different from expect

// it('Multiply Function: 2 times 3 should return 6', ()=> {
//   const calculator = new Calculator();
//   expect(calculator.multiply(2,3)).toBe(6);
// });


/* toBe uses Object.is to test exact equality. 
If you want to check the value of an object, use toEqual instead:
*/
it('Test Object Assignment:', ()=> {
  const data = {one:1};
  data['two'] = 2;
  expect(data).toEqual({one:1,two:2});
});

/* 
more usage of Jest: 
https://jestjs.io/docs/en/using-matchers

1. Numbers
- toBeGreaterThan()
- toBeGreaterThanOrEqual()
...
2. Strings
can use regular expressions
- toMatch();

3. Arrays
4. Exceptions

*/


