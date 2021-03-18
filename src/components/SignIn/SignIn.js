import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import { signInWithGoogle } from "../../firebase/firabase.utils";

import './SignIn.scss';

const SignIn = () => {
  const [signIn, setSignIn] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const {value, name} = e.target;
    setSignIn(prevValues => ({
      ...prevValues, 
      [name]: value
    }));
  }

  return (
    <div className="sign-in">
      <h2>I already have an accoumt</h2>
      <span>Sign in with you email and password</span>
      <div className="sign-in-form">
        <FormInput type="email" name="email" value={signIn.email} label="email" handleChange={handleChange} required />
        <FormInput type="password" name="password" value={signIn.password} label="password" handleChange={handleChange} required />
      </div>
      <div className="buttons">     
        <CustomButton type="submit"> Submit form </CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In With Google </CustomButton>
      </div>
    </div>
  )
}

export default SignIn;
