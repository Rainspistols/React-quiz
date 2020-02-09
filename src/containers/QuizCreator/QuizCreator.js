import React, { Component } from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';

class QuizCreator extends Component {
  state = {};
  submitHandler = e => {
    e.preventDefault();
  };
  addQuestionHandler = () => {};
  createQuizHandler = () => {};
  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Quiz creation</h1>

          <form onSubmit={this.submitHandler}>
            <input type='text' />
            <hr />
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <input type='text' />

            <select></select>

            <Button type='primary' onClick={this.addQuestionHandler}>
              Add a question
            </Button>
            <Button type='success' onClick={this.createQuizHandler}>
              Create the test
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default QuizCreator;
