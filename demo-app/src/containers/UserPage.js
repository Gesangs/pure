import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux'
import { getUserWeiBo } from "../api/weibo"
import { handleWeiboList } from "../utils/class/weibo"
import User from "../component/User/User"
import WeiboList from "./WeiboList";


class UserPage extends Component {
    constructor() {
        super()
        this.state = {
            weiboList: []
        }
    }
    componentDidMount() {
        const uid = this.props.userinfo.userinfo.id
        getUserWeiBo(uid).then(res => {
            this.setState({
                weiboList: handleWeiboList(res.data.statuses)
            });
        });
    }
    render() {
        const { weiboList } = this.state;
        const { userinfo } = this.props.userinfo
        return(
            <div>
                <User userinfo={ userinfo } />
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