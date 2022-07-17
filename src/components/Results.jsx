import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';
import { tally } from '../helpers';

function Results({ userAnswers, score, restartQuiz, coverage }) {
  const triesTotal = tally(userAnswers);
  const oneTries = triesTotal[1] && (
    <div>
      <strong>{triesTotal[1]}</strong> on the first try.
    </div>
  );
  const twoTries = triesTotal[2] && (
    <div>
      <strong>{triesTotal[2]}</strong> on the second try.
    </div>
  );
  const threeTries = triesTotal[3] && (
    <div>
      <strong>{triesTotal[3]}</strong> on the third try.
    </div>
  );
  const fourTries = triesTotal[4] && (
    <div>
      <strong>{triesTotal[4]}</strong> on the fourth try.
    </div>
  );

  return (
    <div className="results-container">
      <h2>Quiz Results</h2>
      <div id="results-chart">
        <Chart coverage={coverage} />
      </div>
      <div>You answered...</div>
      {oneTries}
      {twoTries}
      {threeTries}
      {fourTries}
      <div className="results-total">
        Your Total Score is <strong>{score}</strong>.
      </div>
      <a onClick={restartQuiz}>Restart Quiz</a>
    </div>
  );
}

Results.propTypes = {
  userAnswers: PropTypes.arrayOf.isRequired,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired,
  coverage: PropTypes.shape.isRequired,
};

export default Results;
