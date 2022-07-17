import React from 'react';
import PropTypes from 'prop-types';

function Settings({
  score,
  checkedBox,
  numQuestions,
  maxNumOfQuestions,
  updateSpeed,
  updateNumQuestions,
  updateTopics,
  startQuiz,
}) {
  return (
    <div className="wrapper">
      <header>
        <div className="setup">
          <h2>Setup</h2>
        </div>
        <h1>Math Quiz</h1>
        <div className="score-container">
          <h2>Score</h2>
          <div className="score">{score}</div>
          <div className="description">points</div>
        </div>
      </header>
      <div className="settings-container">
        <div className="options">
          <h2>Math Topics</h2>
          <label>
            <input
              type="checkbox"
              onChange={updateTopics}
              value="discrete"
              checked={checkedBox.discrete}
            />{' '}
            Discrete Mathematics
          </label>
          <label>
            <input
              type="checkbox"
              onChange={updateTopics}
              value="linalg"
              checked={checkedBox.linalg}
            />{' '}
            Linear Algebra
          </label>
          <label>
            <input
              type="checkbox"
              onChange={updateTopics}
              value="calculus"
              checked={checkedBox.calculus}
            />{' '}
            Calculus
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              onChange={updateTopics}
              value="multicalc"
              checked={checkedBox.multicalc}
            />{' '}
            Multivariable Calculus
          </label>
          <label>
            <input
              type="checkbox"
              onChange={updateTopics}
              value="statistics"
              checked={checkedBox.statistics}
            />{' '}
            Statistics and Probability
          </label>
          <label>
            <input
              type="checkbox"
              onChange={updateTopics}
              value="diffeq"
              checked={checkedBox.diffeq}
            />{' '}
            Differential Equations
          </label>
          <br />

          <h2>Select maximum number of questions</h2>
          <input
            type="number"
            onChange={updateNumQuestions}
            min={1}
            max={maxNumOfQuestions}
            value={numQuestions}
          />
          <h2>Select speed</h2>
          <select onChange={updateSpeed}>
            <option value="default">Default</option>
            <option value="fast">GOTTA GO FAST</option>
          </select>
        </div>

        <br />
        <a onClick={startQuiz}>START QUIZ</a>
      </div>
    </div>
  );
}

Settings.propTypes = {
  score: PropTypes.number.isRequired,
  checkedBox: PropTypes.shape.isRequired,
  numQuestions: PropTypes.number.isRequired,
  maxNumOfQuestions: PropTypes.number.isRequired,
  updateSpeed: PropTypes.func.isRequired,
  updateNumQuestions: PropTypes.func.isRequired,
  updateTopics: PropTypes.func.isRequired,
  startQuiz: PropTypes.func.isRequired,
};

export default Settings;
