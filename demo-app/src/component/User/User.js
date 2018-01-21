import React, { Component } from "react";
import "./style.css"
class User extends Component {
    constructor() {
        super()
    }
    render() {
        const userinfo = this.props.userinfo;
        return(
            <div>
                {userinfo ? <div className="UserPage">
                <div className="headBar"></div>
                <div className="userHeader">
                    <div className="coverImg" style={{ backgroundImage: `url(${userinfo.pic_urls}) ` }}></div>
                    <div className="head_pic">
                        <img src={userinfo.head_pic}/>
                    </div>
                    <span>{ userinfo.name }</span>
                    <span className="countNum">关注 { userinfo.friends_count } | 粉丝 { userinfo.followers_count }</span>
                    <span></span>
                    <div className="tabBar">
                        <span>关于</span>
                        <span>微博({userinfo.statuses_count})</span>
                        <span>相册</span>
                    </div>
                </div>
                <div style={{ backgroundColor: "rgb(240, 240, 240)",width: "100%",height:20 }}></div>
            </div> :""}
            </div>
        )
    }
}

export default User