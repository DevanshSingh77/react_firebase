import React from 'react';
import './App.css';

function SignUp() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn-submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;

