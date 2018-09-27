# CMOS_4156_ASE_Jest
This is a demo for Jest, a JavaScript Testing Tool. This demo is for CMOS 4156 Advanced Software Engineering.

## Jest
> Delightful JavaScript Testing
Link: https://jestjs.io

Jest is used by Facebook to test all JavaScript code including React applications. One of Jest's philosophies is to provide an integrated "zero-configuration" experience.

## Getting Started
> link: https://jestjs.io/docs/en/getting-started.html

install Jest using yarn:
```
yarn add --dev jest
```
Or npm:
```
npm install --save-dev jest
```
Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a ```sum.js``` file:
```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```
Then, create a file named ```sum.test.js```. This will contain our actual test:
```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
Add the following section to your ```package.json```:
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

## Run on your computer

1. To run the project, please make sure you have install the Node, to check the node environment, you can use the command at the terminal
```
node --version
```
If you're using OS X or Windows, use one of the installers from the Node.js download page. Be sure to install the version labeled LTS.
link: https://nodejs.org/en/

2. Clone the repository with the command
```
git clone https://github.com/chenKuer/CMOS_4156_ASE_Jest.git
```
then , go into the dictionary
```
cd CMOS_4156_ASE_Jest/
```

3. install the packages
```
npm install
```
4. Run tests
```
npm test
```
5. coverage report
change the package.json script 
```
"test": "jest"
to 
"test": "jest --watchAll --coverage"
```

## Test

More usage of Jest: 
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
...


## Mocking
> https://jestjs.io/docs/en/mock-functions

Mock functions make it easy to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.

There are two ways to mock functions: Either by creating a mock function to use in test code, or writing a manual mock to override a module dependency.
