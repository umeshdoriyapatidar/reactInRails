import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import axios from 'axios';


const SignIn = () => {
  const navigate = useNavigate();
  const handleSignIn = async (formData) => {
    const user = {
        email: formData["email"],
        password: formData["password"]
      }
      try {
        const response = await axios.post(`/login`, { user }, { headers: { 'Content-Type': 'application/json' } });
  
        if(!response.error){
          response.data;
          navigate('/')
        return response;
        }else {
          throw response.data.status
        }
      } catch (error) {
        throw error;
      }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Form onSubmit={handleSignIn} buttonText="Sign In" />
    </div>
  );
};
  
export default SignIn;