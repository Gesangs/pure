import React, { Component } from "react";
import { getUserWeiBo } from "../../api/weibo";
import { getUserMsgByUid } from "../../api/user";
import { handleWeiboList } from "../../utils/class/weibo";
import { handleUser } from "../../utils/class/user";
import { Route,Control } from "react-keeper";
import User from "./User/User";
import AboutUser from "./aboutUser/aboutUser"
import WeiboList from "../../component/WeiboList";

class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      weiboList: [],
      userinfo: {},
      showList: true
    };
  }
  componentDidMount() {
    const uid = this.props.params.id;
    if(Control.state) {
      this.setState({
        userinfo: handleUser(Control.state.user)
      });
    } else {
      getUserMsgByUid(uid).then(res => {
        this.setState({
          userinfo: handleUser(res.data)
        });
      });
      getUserWeiBo(uid).then(res => {
        this.setState({
          weiboList: handleWeiboList(res.data.statuses) || false
        });
      });
    }
  }
  render() {
    const { weiboList, userinfo, showList } = this.state;

    return (
      <div>
        <User userinfo={userinfo} />
        {Control.state == true && showList
         ? <WeiboList weiboList={weiboList} /> 
         : <AboutUser userinfo={userinfo} />}
      </div>
    );
  }
}

export default UserPage;
