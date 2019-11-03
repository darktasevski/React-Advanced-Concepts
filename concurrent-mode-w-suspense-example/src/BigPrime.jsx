import React, { FC } from "react";

export interface BigPrimeProps {
  n: number;
}

const BigPrime: FC<BigPrimeProps> = ({ n }) => {
  let biggestPrime = 2;
  let maxIterations = 1e6;

  for (let i = 2; i < n; i++) {
    // Check if the number is prime
    let isPrime = true;

    for (let k = 2; k < i; k++) {
      if (i % k === 0) {
        isPrime = false;
      }
      maxIterations--;
    }

    if (isPrime) {
      biggestPrime = i;
    }
    if (maxIterations < 0) {
      break;
    }
  }

  return (
    <div>
      Biggest Prime less than {n} is: {biggestPrime}
    </div>
  );
};

export default BigPrime;
