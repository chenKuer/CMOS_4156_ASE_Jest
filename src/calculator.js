"use strict";

export default class Calculator{
  // add two number
  add(a,b) {
    return a+b;
  }

  // substraction
  subtraction(a,b) {
    return a-b;
  }

  // demo: wrong function 
  multiply(a,b) {
    return a+b;
  }

  // division, if b === 0, the value should return 0
  division(a,b) {
    if( b === 0) {
      return 0;
    } else {
      return a/b;
    }
  }
}
