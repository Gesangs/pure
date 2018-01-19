import React, { Component } from "react";
import { connect } from 'react-redux'
import { getUserWeiBo } from "../api/weibo"
import { handleWeiboList } from "../utils/class/weibo"
import User from "../component/User"
import WeiboList from "./WeiboList";


class UserPage extends Component {
    constructor() {
        super()
        this.state = {
            weiboList: [],
            userinfo: {}
        }
    }
    componentDidMount() {
        const uid = this.state.userinfo.id
        getUserWeiBo("5646024554").then(res => {
            this.setState({
                weiboList: handleWeiboList(res.data.statuses)
            });
            console.log(this.state.weiboList);
        });
        this.setState({
            userinfo: this.props.userinfo.userinfo
        })
        console.log(this.state.userinfo)
    }
    render() {
        const { userinfo, weiboList } = this.state;
        return(
            <div>
                {/* <User userinfo={userinfo} /> */}
                <WeiboList weiboList={weiboList} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      userinfo: state.userinfo
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPage)