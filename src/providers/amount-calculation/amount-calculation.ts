import {Injectable} from '@angular/core';

declare const require: any;
const Big = require('big.js');

@Injectable()
export class AmountCalculationProvider {


  // Add, subtract, multiply and divide
  constructor() {
  }
  add(num1: number, num2: number, ...numArray: number[]) {

    let param1 = new Big(num1);
    let param2 = new Big(num2);
    let param3 = new Big(0);
    let CountResult = new Big(0);
    if (numArray.length > 0) {

      for (const i of numArray) {
        let temp = new Big(i);
        param3 = param3.plus(temp);
      }
      CountResult = param1.plus(param2).plus(param3).toFixed();


      return Number(CountResult);
    } else {
      CountResult = param1.plus(param2).toFixed();
      return Number(CountResult);
    }
  }

  multiply(num1: number, num2: number, ...numArray: number[]) {
    let param1 = new Big(num1);
    let param2 = new Big(num2);
    let param3 = new Big(1);
    let CountResult = new Big(1);
    if (numArray.length > 0) {


      for (const i of numArray) {
        let temp = new Big(i);

        param3 = param3.times(temp);
      }

      CountResult = param1.times(param2).times(param3).toFixed();

      return Number(CountResult);
    } else {

      CountResult = param1.times(param2).toFixed();
      return Number(CountResult);
    }
  }

  subtract(minuend: number, subtraction: number) {

    let param1 = new Big(minuend);
    let param2 = new Big(subtraction);
    let countResult = param1.minus(param2).toFixed();

    return Number(countResult);
  }

}
