import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStar,
} from '../../redux/user/user.actions';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStar } = this.props;
    const { email, password } = this.state;

    emailSignInStar(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
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
  }
}

const mapDispatchToProsp = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStar: (email, password) =>
    dispatch(emailSignInStar({ email, password })),
});
export default connect(null, mapDispatchToProsp)(SignIn);
