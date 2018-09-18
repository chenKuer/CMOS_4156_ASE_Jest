# CMOS_4156_ASE_Jest
This is a demo for Jest, a JavaScript Testing Tool. This demo is for CMOS 4156 Advanced Software Engineering.


# Jest
> Delightful JavaScript Testing
 Link: https://jestjs.io

Jest is used by Facebook to test all JavaScript code including React applications. One of Jest's philosophies is to provide an integrated "zero-configuration" experience.

# Getting Started
> link: https://jestjs.io/docs/en/getting-started.html

install Jest using yarn:
```javascript
yarn add --dev jest
```
Or npm:
```
npm install --save-dev jest
```
Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a sum.jsfile:
```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```
Then, create a file named sum.test.js. This will contain our actual test:
```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
Add the following section to your package.json:
```
{
  "scripts": {
    "test": "jest"
  }
}
```
Finally, run yarn test and Jest will print this message:
```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```
You just successfully wrote your first test using Jest!

## Branch Coverage

One test case cannot cover all the branch when there are condition statement. such as <code>if(){} eles(){}</code> statement


## Mocking
