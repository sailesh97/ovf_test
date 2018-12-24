import React,{Component} from 'react';
import classes from './Login.module.css';

class Login extends Component {
  render(){
    return (<div>
      <h1>Sign In</h1>
      <label htmlFor="email" className="font-weight-bold">Email</label>
      <input type="email" className="form-control" />
      <br />
      <label htmlFor="password" className="font-weight-bold">Password</label>
      <input type="password" className="form-control" />
      <p>
        <a href="/">Forgot password?</a>
      </p>
      <button className="btn-block" style={{ backgroundColor: "Yellow", marginBottom: "20px", border: "0px" }}>Sign In</button>

      <div className={classes.border}></div>

      <button className="btn-block" onClick={this.props.toggleSignUp}>Create OVF Account</button>
    </div>);
  }
}
  


export default Login;