function findSum(numbers, target) {
  const result = [];

  numbers.forEach((number, index) => {
    const numbersToCompare = numbers;

    numbersToCompare.forEach((numberTC, indexTC) => {
      if (index === indexTC) {
        return;
      }

      if (result.flat().includes(number) || result.flat().includes(numberTC)) {
        return;
      }

      if (number + numberTC === target) {
        return result.push([number, numberTC]);
      }
    });
  });

  return result;
}

console.log(findSum([1, 2, 3, 4], 5));
// console.log(findSum([1, -1, 2, -2], 1));
