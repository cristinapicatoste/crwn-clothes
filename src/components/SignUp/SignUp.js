import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import { auth, createUserProfileDocument } from '../../firebase/firabase.utils';

import './SignUp.scss'

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const {value, name} = e.target;
    setSignUp(prevValues => ({
      ...prevValues, 
      [name]: value
    }));
  }

  const handleSubmit = async () => {
    const {displayName, email, password, confirmPassword} = signUp;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, {displayName});
      setSignUp({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="sign-up">
      <h2>I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <div className="sign-up-form">
        <FormInput type="text" name="displayName" value={signUp.displayName} label="Display name" handleChange={handleChange} required />
        <FormInput type="email" name="email" value={signUp.email} label="Email" handleChange={handleChange} required />
        <FormInput type="password" name="password" value={signUp.password} label="Password" handleChange={handleChange} required />
        <FormInput type="password" name="confirmPassword" value={signUp.confirmPassword} label="Confirm password" handleChange={handleChange} required />
        <CustomButton type="submit" onClick={handleSubmit}>SIGN UP</CustomButton>
      </div>
      
    </div>
  )
}

export default SignUp;
