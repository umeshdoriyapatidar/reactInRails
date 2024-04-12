import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import axios from 'axios';
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const SignIn = () => {
  const navigate = useNavigate();
  const handleSignIn = async (formData) => {
    const user = {
        email: formData["email"],
        password: formData["password"]
      }
      try {
        const response = await axios.post(`/users/sign_in`, { user }, { headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken } });
  
        if(response.status === 200){
          response.data;
          localStorage.setItem('currentUserId', response.data.data.id)
          navigate('/')
        }else {
          throw response.status.message
        }
      } catch (error) {
         console.log(error.response.message);
         if(error.response.status == 422){
         alert("Check Credentials please or Sign Up")}
      }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Sign In</h2>
            <Form onSubmit={handleSignIn} buttonText="Sign In" />
        </div>
      </div>
    </div>
  );
};
  
export default SignIn;