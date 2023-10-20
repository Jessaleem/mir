export const numbersFractionCalculator = (numbers: number[]) => {

  const positives = (numbers.filter(number => number > 0).length / numbers.length).toFixed(6)
  const negatives = (numbers.filter(number => number < 0).length / numbers.length).toFixed(6)
  const zeros = (numbers.filter(number => number === 0).length / numbers.length).toFixed(6)

  return {
    positives: positives,
    negative: negatives,
    zeros: zeros
  }
};

const data = [-4, 3, -9, 0, 4, 1]
console.log(numbersFractionCalculator(data))