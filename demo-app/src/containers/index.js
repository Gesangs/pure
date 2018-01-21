import React, { Component } from "react";
import { getEmotions } from "../api/weibo";
import { handleUser } from "../utils/class/user";
import { getUserUid, getUserMsgByUid } from "../api/user";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Scroll from "../component/scroll/Scroll";
import Head from "../component/Head";
import Foot from "../component/Foot";
import Home from "../containers/Home";
import UserPage from "../containers/UserPage";
import * as emotionActionsFromOtherFile from "../action/emotion";
import * as userinfoActionsFromOtherFile from "../action/userinfo";

class Index extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    getEmotions().then(res => {
      this.props.emotionActions.update({
        emotion: res.data
      });
      getUserUid().then(res => {
        getUserMsgByUid(res.data.uid).then(res => {
          this.props.userinfoActions.update({
            userinfo: handleUser(res.data)
          });
        });
      });
    });
  }
  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <Head />
        <Home />
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
