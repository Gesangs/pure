import React, { Component } from "react";
import { getUserWeiBo } from "../api/weibo";
import { getUserMsgByUid } from "../api/user";
import { handleWeiboList } from "../utils/class/weibo";
import { handleUser } from "../utils/class/user";
import User from "../component/User/User";
import WeiboList from "../component/WeiboList";

class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      weiboList: [],
      userinfo: {}
    };
  }
  componentDidMount() {
    const uid = this.props.params.id;
    getUserMsgByUid(uid).then(res => {
      this.setState({
        userinfo: handleUser(res.data)
      });
    });
    getUserWeiBo(uid).then(res => {
      this.setState({
        weiboList: handleWeiboList(res.data.statuses)
      });
    });
  }
  render() {
    const { weiboList, userinfo } = this.state;
    return (
      <div>
        <User userinfo={userinfo} />
        <WeiboList weiboList={weiboList} />
      </div>
    );
  }
}

export default UserPage;
