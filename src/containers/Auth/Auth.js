import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';

class Auth extends Component {
  loginHandler = () => {};

  registerHandler = () => {};
  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Authorization</h1>

          <form className={classes.AuthForm} onSubmit={this.submitHandler}>
            <input type='text' />
            <input type='text' />

            <Button type='success' onClick={this.loginHandler}>
              Enter
            </Button>
            <Button type='primary' onClick={this.registerHandler}>
              Registration
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
