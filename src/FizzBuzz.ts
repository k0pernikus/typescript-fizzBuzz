export class FizzBuzz {
    public get(number: number): string {
        if (this.isSplittableBy(number, 15)) {
            return "FizzBuzz";
        }

        if (number % 3 === 0) {
            return "Fizz";
        }

        if (number % 5 === 0) {
            return "Buzz";
        }

        return number.toString();
    }

    private isSplittableBy(number: number, modulo: number) {
        return number % modulo === 0;
    }
}

