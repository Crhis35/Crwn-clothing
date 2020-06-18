import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStar,
} from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = ({ googleSignInStart, emailSignInStar }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStar(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButtom type="submit">Sign in</CustomButtom>

          <CustomButtom
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in With Google
          </CustomButtom>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProsp = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStar: (email, password) =>
    dispatch(emailSignInStar({ email, password })),
});
export default connect(null, mapDispatchToProsp)(SignIn);
