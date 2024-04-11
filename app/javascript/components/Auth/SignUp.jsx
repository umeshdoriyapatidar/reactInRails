import React from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Form from './Form';

const SignUp = () => {
  const navigate = useNavigate();
  const handleSignUp = async (formData) => {
    const user = {
        email: formData["email"],
        password: formData["password"]
      }
    try {
      const response = await axios.post(`/signup`, { user }, { headers: { 'Content-Type': 'application/json' } });

      if(!response.error){
        navigate("/")
      }else {
        throw response.data.status
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSignUp} buttonText="Sign Up" />
    </div>
  );
};
export default SignUp;