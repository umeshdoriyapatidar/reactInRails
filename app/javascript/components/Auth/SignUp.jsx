import React from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Form from './Form';
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const SignUp = () => {
  const navigate = useNavigate();
  const handleSignUp = async (formData) => {
    const user = {
        email: formData["email"],
        password: formData["password"]
      }
    try {
      const response = await axios.post(`/users/sign_up`, { user }, { headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken } });

      if(response.status == 200){
        // localStorage.setItem('currentUserId', response.data.data.id)
        navigate("/")
      }else {
        throw response.data.status
      }
    } catch (error) {
      console.log(error.response.message);
      if(error.response.status == 422){
      alert("Please Add Proper Value to the field")}
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSignUp} buttonText="Sign Up" />
        </div>
      </div>
    </div>
  );
};
export default SignUp;