import React from 'react';
import { Link } from 'react-router';

export const SignupForm = () => {
  return (
    <div className="signup">
      <h3>Register</h3>
      <form>
        <div className="form-group">
          <input type="email" className="form-control signup" id="email" placeholder="Username"/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control signup" id="pwd" placeholder="Password" />
        </div>
        <Link to="/dashboard">
          <button type="submit" className="btn btn-default signup">Register</button>
        </Link>
      </form>
    </div>
  );
};
