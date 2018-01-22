import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import "../style/headFoot.css";
class Head extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div style={{ top: 0 }} className="head">
          <Link component="div" to={`/user/${this.props.userinfo.userId}`}>
            用户
          </Link>
          <div>全部微博</div>
        </div>
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