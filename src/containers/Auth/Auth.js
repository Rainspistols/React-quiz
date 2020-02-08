import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

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
            <Input label='Email'/>
            <Input label='Password'/>

            <Button type='success' onClick={this.loginHandler}>
              Log in
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
