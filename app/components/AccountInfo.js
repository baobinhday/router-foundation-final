import React from 'react';
import {connect} from 'react-redux';

class AccountInfo extends React.Component{
  render(){
    var {username} = this.props;
    var xhtml = username === null? <SignIn/>:<AccountInfo/>
    return (
      <div>
        <h1>This is Account</h1>
        <p>Username: {this.props.username}</p>
      </div>
    )
  }
}

module.exports = connect(function (state){
  return {username: state.username};
})(AccountInfo);
