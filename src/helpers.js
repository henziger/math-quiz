export const coveragePercentage = arr => {
    if (arr.length)
        return (arr.reduce( ( acc, cur ) => acc + cur, 0 ) / (arr.length * 10)) * 100;
    return 0;
};

export const shuffleQuestions = array => {

    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

export const tally = arr => {
    return arr.map(item => {
      return item.tries;
    }).reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
};
