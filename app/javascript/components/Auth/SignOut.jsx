import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const SignOut = () => {
  const navigate = useNavigate()
  const handleSignOut = async () => {
    try {
      await axios.delete('/logout');
      console.log('User signed out successfully');
      navigate('/sing_in')
    } catch (error) {
      console.error('Sign-out failed', error.response.data);
    }
  };

  return (
    <div>
      <h1>Sign Out</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;