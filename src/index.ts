import {FizzBuzz} from "./FizzBuzz";

const start = 1;
const end = 100;

const numbers: number[] = [];
for (let index: number = start; index <= end; index++) {
    numbers.push(index);
}

const fizzBuzz = new FizzBuzz();
const output = numbers.map(fizzBuzz.get);
console.log(output.join("\n"));

