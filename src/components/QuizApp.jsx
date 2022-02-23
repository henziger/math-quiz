import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quiz from './Quiz';
import Results from './Results';
import Settings from './Settings';
import { shuffleQuestions } from '../helpers';
import questions from '../questions';

const QUESTIONS = shuffleQuestions(questions);

class QuizApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: new Set(['calculus', 'diffeq', 'discrete', 'linalg', 'multicalc', 'statistics']),
            checked: {'calculus': true, 'diffeq': true, 'discrete': true, 'linalg': true, 'multicalc': true, 'statistics': true},
            coverage: {'calculus': [], 'diffeq': [], 'discrete': [], 'linalg': [], 'multicalc': [], 'statistics': []},
            step: 0,
            score: 0,
            speed: 1,
            numOfQuestions: questions.length,
            maxNumOfQuestions: questions.length
        };

        this.handleAnswerClick = this.handleAnswerClick.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.updateSpeed = this.updateSpeed.bind(this);
        this.updateNumQuestions = this.updateNumQuestions.bind(this);
        this.updateTopics = this.updateTopics.bind(this);
        this.startQuiz = this.startQuiz.bind(this);
  }

  handleAnswerClick(value, e) {
    const { questions, step, userAnswers } = this.state;
    const isCorrect = questions[0].answers[questions[0].correct].key === value;
    const answersFromUser = userAnswers.slice();
    const currentStep = step - 1;
    const tries = answersFromUser[currentStep].tries;

    if (isCorrect) {

      document.querySelector('.question:first-child').style.pointerEvents = 'none';

      e.target.classList.add('right');

      answersFromUser[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: answersFromUser
      });

      setTimeout(() => {
        const praise = document.querySelector('.praise');
        const bonus = document.querySelector('.bonus');

        if (tries === 0) {
          praise.textContent = '1st Try!';
          bonus.textContent = '+10';
        }
        if (tries === 1) {
          praise.textContent = '2nd Try!';
          bonus.textContent = '+5';
        }
        if (tries === 2) {
          praise.textContent = 'Correct!';
          bonus.textContent = '+2';
        }
        if (tries === 3) {
          praise.textContent = 'Correct!';
          bonus.textContent = '+1';
        }

        document.querySelector('.correct-modal').classList.add('modal-enter');
        document.querySelector('.bonus').classList.add('show');

      }, 750 / this.state.speed);

      setTimeout(this.nextStep, 2750 / this.state.speed);

    } else {

      e.target.style.pointerEvents = 'none';
      e.target.classList.add('wrong');

      answersFromUser[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: answersFromUser
      });

    }
  }

  nextStep() {
    document.querySelector('.correct-modal').classList.remove('modal-enter');
    document.querySelector('.bonus').classList.remove('show');
    const { questions, userAnswers, step, score, coverage } = this.state;
    const restOfQuestions = questions.slice(1);
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;

    const incr = (() => {
        if (tries === 1) return 10;
        if (tries === 2) return 5;
        if (tries === 3) return 2;
        return 1;
    })();

    coverage[questions[0].category].push(incr);

    this.setState({
        step: step + 1,
        score: score + incr,
        coverage: coverage,
        questions: restOfQuestions
    });
  }

    static restartQuiz() {
        window.location.reload();
    }

    updateSpeed(event) {
        if (event.target.value === "fast")
            this.setState({speed: 5});
        else
            this.setState({speed: 1});
    }

    updateNumQuestions(event) {
        this.setState({numOfQuestions: parseInt(event.target.value.replace(/\D/,''))});
    }

    updateTopics(event) {
        if (event.target.checked)
            this.state.categories.add(event.target.value);
        else
            this.state.categories.delete(event.target.value);
        let new_checked = this.state.checked;
        new_checked[event.target.value] = this.state.categories.has(event.target.value);
        this.setState({checked: new_checked});
    }

    startQuiz() {
        let selected_questions = [];

        for (let i = 0; i < QUESTIONS.length; i++) {
            // Remove questions whose category is not selected.
            if (this.state.categories.has(QUESTIONS[i].category))
                selected_questions.push(QUESTIONS[i]);
        }

        // Limit the number of questions to numOfQuestions
        selected_questions = selected_questions.slice(0, this.state.numOfQuestions);
        this.setState(
            {
                step: 1,
                questions: selected_questions,
                userAnswers: selected_questions.map(question => {
                    return {
                        tries: 0
                    }
                }),
                numOfQuestions: selected_questions.length
            });
    }

  render() {
    const { step, questions, userAnswers, score, coverage } = this.state;
    return (
      <div>
        {(() => {
            if (step === 0) {
                return (
                    <Settings
                        score={score}
                        checkedBox={this.state.checked}
                        numQuestions={this.state.numOfQuestions}
                        maxNumOfQuestions={this.state.maxNumOfQuestions}
                        updateSpeed={this.updateSpeed}
                        updateNumQuestions={this.updateNumQuestions}
                        updateTopics={this.updateTopics}
                        startQuiz={this.startQuiz}
                    />
                )
            }
            else if (step >= this.state.numOfQuestions + 1) {
            return (
              <Results
                score={score}
                restartQuiz={QuizApp.restartQuiz}
                userAnswers={userAnswers}
                coverage={coverage}
              />
            );
          } else return (
              <Quiz
                  step={step}
                  questions={questions}
                  totalQuestions={this.state.numOfQuestions}
                  score={score}
                  handleAnswerClick={this.handleAnswerClick}
              />
          );
        })()}
      </div>
    );
  }
}

QuizApp.defaultProps = {
  totalQuestions: QUESTIONS.length
};

QuizApp.propTypes = {
  totalQuestions: PropTypes.number.isRequired
};

export default QuizApp;
