import React from 'react';
const signup = () => {
  return <div>
      <h1>Sign Up</h1>
      <label htmlFor="Name" className="font-weight-bold">
        Name
      </label>
      <input type="name" className="form-control" />
      <br />
      <label htmlFor="email" className="font-weight-bold">
        Email
      </label>
      <input type="email" className="form-control" />
      <br />
      <label htmlFor="password" className="font-weight-bold">
        Password
      </label>
      <input type="password" className="form-control" />
      <label htmlFor="password2" className="font-weight-bold">
      Re-enter Password
      </label>
    <input type="password" className="form-control" />
      <button className="btn-block">Create OVF Account</button>
    </div>;
}

export default signup;