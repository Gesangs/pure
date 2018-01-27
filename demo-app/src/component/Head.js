import React, { Component } from "react";
import { connect } from 'react-redux'
import { Control } from "react-keeper";
import "./headFoot.css";
class Head extends Component {
  constructor() {
    super();
  }
  goToUser(id) {
      Control.go(`/user/${id}`)
      setTimeout(() => {
        document.getElementsByClassName("Index")[0].style.display = 'none';
      },200)
  }
  render() {
    return (
        <div style={{ top: 0 }} className="head">
          <div onClick={this.goToUser.bind(this, this.props.userinfo.userId)}>
            用户
          </div>
          <div>全部微博</div>
        </div>
    );
  }
}


function mapStateToProps(state) {
    return {
      userinfo: state.userinfo
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Head)