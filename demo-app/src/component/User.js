import React, { Component } from "react";
class User extends Component {
    constructor() {
        super()
    }
    render() {
        const userinfo = this.props.userinfo;
        return(
            <div>
                <div className="headBar"></div>
                <div className="userHeader">
                    <div className="coverImg" style={{ backgroundImage: `url(${userinfo.pic_urls})` }}></div>
                    <img src={userinfo.head_pic}/>
                    <span>{ userinfo.name }</span>
                    <span>{ userinfo.friends_count }</span>
                    <span>{ userinfo.followers_count }</span>
                    <div className="tabBar">
                        <span>关于</span>
                        <span>微博({userinfo.statuses_count})</span>
                        <span>相册</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default User