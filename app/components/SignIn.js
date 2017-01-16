import React from 'react';
import {connect} from 'react-redux';

class SignIn extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var {username, password} = this.refs;
    if(username.value === 'khoapham' && password.value === '123'){
      dispatch({type: 'LOG_IN', username: username.value});
    }
    console.log('Submit');
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Username" ref="username"/>
          <br/><br/>
          <input type="password" placeholder="Password" ref="password"/>
          <br/><br/>
          <button type="submit">Sign In</button>
        </form>
      </div>
    )
  }
}

module.exports = connect()(SignIn);
