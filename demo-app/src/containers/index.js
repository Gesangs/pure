import React, { Component } from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getEmotions } from "../api/weibo";
import { getUserMsg } from "../api/user";
import { handleUser } from "../utils/class/user";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userinfoActionsFromOtherFile from "../action/userinfo";
import * as emotionActionsFromOtherFile from "../action/emotion";

import Head from "../containers/Home/Head";
import Foot from "../containers/Home/Foot";

class Index extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  componentDidMount() {
    getEmotions().then(res => {
      this.props.emotionActions.update({
        emotion: res.data
      });
    });
    getUserMsg().then((res) => {
      this.props.userinfoActions.update({
      userinfo: handleUser(res.data) 
    });
    })
  }
  render() {
    return (
      <div style={{ marginTop: 50 }} className="Index">
        <Head />
        {this.props.children}
        <Foot />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    emotionActions: bindActionCreators(emotionActionsFromOtherFile, dispatch),
    userinfoActions: bindActionCreators(userinfoActionsFromOtherFile, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);
