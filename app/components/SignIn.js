import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class SignIn extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var {username, password} = this.refs;

    // if(username.value === 'khoapham' && password.value === '123'){
    //   dispatch({type: 'LOG_IN', username: username.value});
    // }
    // console.log('Submit');

    axios.post('/signIn', {username: username.value,password: password.value})
    .then(res => {
      if(res.data === 'DANG_NHAP_THANH_CONG'){
        dispatch({type: 'LOG_IN', username: username.value});
      }else{
        dispatch({type: 'SHOW_NOTIFICATION', txt: 'Kiem tra lai username va password'});
      }
    })
    .catch(err => console.log(err))
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Username" ref="username"/>
          <br/><br/>
          <input type="password" placeholder="Password" ref="password"/>
          <br/><br/>
          <button type="submit" className="button">Sign In</button>
        </form>
      </div>
    )
  }
}

module.exports = connect()(SignIn);
