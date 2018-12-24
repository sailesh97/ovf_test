import React, {Component} from 'react';
import classes from './Links.module.css';
import Modal from '../../../UI/Modal/Modal';
import Login from '../../../Login/Login';
import Signup from '../../../Signup/Signup';

class Links extends Component {
  state = {
    signin: false,
    signup: false
  };

  toogleSignIn = () => {
    this.setState({ signin: true,signup:false});
  };

  toogleSignUp = () => {
    this.setState({ signup: true ,signin:false });
  };
  
  modalClosed = () => {
    let signin = null;
    let signup =null;
    signin= {...this.state.signin};
    signup = {...this.state.signup};

    this.setState({ signin: !signin ,signup:!signup});
  };
  render() {
   
    return <div className="row w-50 mt-1">
        <div className="col-3">
          <button className="btn-success p-2 border-0" onClick={this.toogleSignIn}>
            LogIn
            <i className=" fas fa-sign-in-alt" />
          </button>
        </div>

        {(this.state.signin ) ? <Modal show={(this.state.signin)} modalClosed={this.modalClosed}>
         
           
           
            {this.state.signin ? <Login toggleSignUp={this.toogleSignUp} /> : null} 
          {this.state.signup ? <Signup /> : null}
            
          </Modal> : null}

        <div className="col-sm-2">
          <a href="/" className={classes.links}>
            More
          </a>
        </div>

        <div className="col-sm-2">
          <a href="/" className={classes.links}>
            Cart
          </a>
        </div>
        <div className="col-sm-3">
          <a href="/" className={classes.links}>
            Contact Us
          </a>
        </div>
      </div>;
  }
} 

export default Links;