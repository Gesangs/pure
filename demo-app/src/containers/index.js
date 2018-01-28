import React, { Component } from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getEmotions } from "../api/weibo";
import { getUserUid, getUserMsgByUid } from "../api/user";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Scroll from "../component/scroll/index";
import Head from "../containers/Home/Head";
import Foot from "../containers/Home/Foot";
import Home from "../containers/Home/index";
import NotFound from "../containers/404"
import * as emotionActionsFromOtherFile from "../action/emotion";
import * as userinfoActionsFromOtherFile from "../action/userinfo";
import { handleUser } from "../utils/class/user";

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
    getUserUid().then(res => {
      getUserMsgByUid(res.data.uid).then((res) => {
        this.props.userinfoActions.update({
        userinfo: handleUser(res.data) 
      });
      })
    });
  }
  render() {
    return (
      <div style={{ marginTop: 50 }} className="Index">
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
