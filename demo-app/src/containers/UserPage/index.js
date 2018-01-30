import React, { Component } from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getUserWeiBo } from "../../api/weibo";
import { getUserMsgByUid } from "../../api/user";
import { handleWeiboList } from "../../utils/class/weibo";
import { handleUser } from "../../utils/class/user";
import { Route,Control } from "react-keeper";
import User from "./User/index";
import AboutUser from "./aboutUser/index"
import WeiboList from "../../component/WeiboList";

class UserPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      weiboList: [],
      userinfo: {},
      showList: false
    };
  }
  componentDidMount() {
    this.setState({
      userinfo: Control.state.user
    });
    if(Control.state.show) {
      getUserWeiBo(Control.state.user.id).then(res => {
        this.setState({
          weiboList: handleWeiboList(res.data.statuses) || false
        });
      });
    }
  }
  SwitchTab(){
    this.setState({
      showList: !this.state.showList
    })
  }
  render() {
    const { weiboList, userinfo, showList } = this.state;
    return (
      <div className="User">
        <User userinfo={userinfo} SwitchTab={this.SwitchTab.bind(this)} />
        { !Control.state.show || showList
         ? <AboutUser userinfo={userinfo} /> 
         : <WeiboList weiboList={weiboList} />}
      </div>
    );
  }
}

export default UserPage;
