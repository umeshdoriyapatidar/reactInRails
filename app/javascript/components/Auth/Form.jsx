import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Form = ({ onSubmit, buttonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (<>
    <form onSubmit={handleSubmit} className="p-3">
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email}
        onChange={(e) => setEmail(e.target.value)}
        required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Password"  value={password}
        onChange={(e) => setPassword(e.target.value)}
        required />
      </div>
      <button type="submit" className="btn btn-primary mt-3">{buttonText}</button>
    </form>
    <br/>
    <h1>Go to home page:  <Link to="/" className="btn btn-secondary mt-3">Home</Link></h1>
    </>
  );
};

export default Form;
