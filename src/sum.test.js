const test = require('./sum');

// test case 1
// toBe()
test('adds 1 + 2 to equal 3', () =>{
  expect(test.sum(1,2)).toBe(3);
});

//
