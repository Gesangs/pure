import React, { Component } from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getUserWeiBo } from "../../api/weibo";
import { getUserMsgByUid } from "../../api/user";
import { handleWeiboList } from "../../utils/class/weibo";
import { handleUser } from "../../utils/class/user";
import { Control } from "react-keeper";
import User from "./User/index";
import AboutUser from "./aboutUser/index"
import WeiboList from "../../component/WeiboList";

class UserPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      weiboList: [],
      userinfo: Control.state.user || {},
      showList: false
    };
  }
  componentDidMount() {
    if(this.state.show) {
      getUserWeiBo(this.state.user.id).then(res => {
        this.setState({
          weiboList: handleWeiboList(res.data.statuses) || false
        });
      });
    }
  }
  SwitchTab(){
    if(localStorage.getItem("uid") !== this.state.userinfo) return;
    this.setState({
      showList: !this.state.showList
    })
  }
  render() {
    const { weiboList, userinfo, showList } = this.state;
    return (
      <div className="User">
        <User userinfo={userinfo} SwitchTab={this.SwitchTab.bind(this)} />
        { showList
         ? <WeiboList weiboList={weiboList} />
         : <AboutUser userinfo={userinfo} />}
      </div>
    );
  }
}

export default UserPage;
