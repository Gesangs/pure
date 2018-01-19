import React, { Component } from "react";
import { Logout } from "../api/user";
import { Key, access_token, reUri } from "../config/config"
import '../style/headFoot.css'

class Foot extends Component {
    constructor() {
        super()
    }
    _logout() {
        Logout().then((res) => {
          localStorage.removeItem("access_token");
          console.log(res);
          window.location.href = `https://api.weibo.com/oauth2/authorize?client_id=${Key}&response_type=code&redirect_uri=${reUri}`;
        });
      }
    render() {
        return(
            <div >
                <div style={{ "bottom": -3 }} className="foot">
                    <div>主页</div>
                    <div>消息</div>
                    <div>热门</div>
                </div>
                <div className="qiuqiu" onClick={this._logout.bind(this)}></div>
            </div>
        )
    }
}

export default Foot