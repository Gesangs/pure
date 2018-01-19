import React, { Component } from "react";
import { scrollDisplay } from "../utils/pullToRefresh";
import { getEmotions } from "../api/weibo";
import { handleUser } from "../utils/class/user";
import { getUserUid, getUserMsgByUid } from "../api/user";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import WeiboList from "../containers/WeiboList";
import Scroll from "../component/Scroll";
import Head from "../component/Head";
import Foot from "../component/Foot";
import User from "../component/User";
import * as emotionActionsFromOtherFile from "../action/emotion";
import * as userinfoActionsFromOtherFile from "../action/userinfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      height: 3000,
    };
  }
  componentDidMount() {
    scrollDisplay();
    getEmotions().then(res => {
      this.props.emotionActions.update({
        emotion: res.data
      });
    });
    getUserUid().then(res => {
      getUserMsgByUid(res.data.uid).then(res => {
        this.props.userinfoActions.update({
          userinfo: handleUser(res.data)
        });
      });
    });
  }
  handleUpEvent() {
    console.log("ssss");
  }
  handleBottomEvent() {
    this.setState({
      height: this.state.height + 3000
    });
  }
  render() {
    return (
      <div style={{ marginTop: 50 }}>
        {/* <Head /> */}
        {/* <Scroll onPullDownRefresh={this.handleUpEvent.bind(this)}
                onReachBottom={this.handleBottomEvent.bind(this)}>
        <div style={{width: '100%', height: this.state.height}}></div>
        </Scroll> */}
        {/* <User /> */}
        {/* <WeiboList /> */}
        {/* <Foot /> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
