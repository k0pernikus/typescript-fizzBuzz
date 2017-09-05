import * as chai from "chai";
import {FizzBuzz} from "../../src/FizzBuzz";

describe("FizzBuzz", () => {

    const expectedMap: Map<number, string> = new Map([
        [1, "1"],
        [3, "Fizz"],
        [5, "Buzz"],
        [15, "FizzBuzz"],
        [17, "17"],
        [23, "23"],
        [27, "Fizz"],
        [55, "Buzz"],
        [60, "FizzBuzz"],
    ]);

    const fizzBuzz = new FizzBuzz();

    expectedMap.forEach((expectedResult, param) => {
        it(`should return ${expectedResult} for the input ${param}`, () => {
            const actual = fizzBuzz.get(param);
            chai.expect(actual).to.equal(expectedResult, `It should return ${expectedResult} for the input ${param}`);

        });
    });
});
