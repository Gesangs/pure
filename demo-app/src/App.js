import React, { Component } from 'react';
import { getNewWeiBo,getUserWeiBo } from './api/weibo'
import {handleWeibo} from './base/class/weibo'
import {Logout} from './api/user'
import WeiboList from './weiboList'
import { access_token } from './config'

class App extends Component {

  constructor() {
    super()
    this.state = {
      access_token,
      weiboList: []
    }
  }
  componentDidMount() {
    getNewWeiBo(this.state.access_token).then((res) => {
      console.log(res.data.statuses)
      this.setState({
        weiboList: this._handleWeiboList(res.data.statuses)
      })
    })
  }
  _handleWeiboList(weibo) {
    weibo = weibo || []
    const List = []
    weibo.forEach((item, index) => {
      List.push(handleWeibo(item))
    });
    return List
  }

  _logout() {
    Logout(this.state.access_token)
    localStorage.removeItem('access_token')
  }

  render() {
    return (
      <div>
        {
          this.state.weiboList.length
          ? <WeiboList list={this.state.weiboList} />
          : <div>加载中~~~</div>
        }
      </div>  
    );
  }
}

export default App;
