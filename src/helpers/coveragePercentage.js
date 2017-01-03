/**
 * Created by eric on 2016-12-30.
 */

const coveragePercentage = arr => {
    if (arr.length)
        return (arr.reduce( ( acc, cur ) => acc + cur, 0 ) / (arr.length * 10)) * 100;
    return 0;
};

export default coveragePercentage;