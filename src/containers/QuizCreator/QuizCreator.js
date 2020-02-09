import React, { Component } from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import { createControl } from '../../form/formFramework';
import Input from '../../components/UI/Input/Input';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

function createOptionControl(number) {
  return createControl(
    {
      label: `Option ${number}`,
      errorMessage: 'Value cannot be empty',
      id: number
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    question: createControl(
      {
        label: 'Enter the question',
        errorMessage: 'The question cannot be empty'
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  };
}

class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: createFormControls()
  };
  submitHandler = e => {
    e.preventDefault();
  };
  addQuestionHandler = () => {};
  createQuizHandler = () => {};
  changeHandler = (value, controlName) => {};
  rednerControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Auxiliary key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={e => this.changeHandler(e.target.value, controlName)}
          />
          {index === 0 ? <hr /> : null}
        </Auxiliary>
      );
    });
  }
  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Quiz creation</h1>

          <form onSubmit={this.submitHandler}>
            {this.rednerControls()}

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
