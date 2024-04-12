import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const SignOut = () => {
  const navigate = useNavigate()
  const handleSignOut = async () => {
    try {
      await axios.delete('/users/sign_out',{ headers: {'X-CSRF-Token': csrfToken }});
      localStorage.setItem('currentUserId', "")
      console.log('User signed out successfully');
      navigate('/users/sign_in')
    } catch (error) {
      console.error('Sign-out failed', error.response.data);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <button onClick={handleSignOut} className="btn btn-primary mt-3">Sign Out</button>
      </div>
    </div>
  );
};

export default SignOut;