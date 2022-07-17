export const coveragePercentage = (arr) => {
  if (arr.length) {
    return (arr.reduce((acc, cur) => acc + cur, 0) / (arr.length * 10)) * 100;
  }
  return 0;
};

export const tally = (arr) => {
  return arr
    .map((item) => {
      return item.tries;
    })
    .reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
};
