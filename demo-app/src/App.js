import React, { Component } from 'react';
import { getNewWeiBo,shortToLong } from './api/weibo'
import {handleWeibo} from './base/class/weibo'
import {Logout} from './api/user'
import WeiboList from './weiboList'
import { Key, access_token } from './config'

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
  _handleUrl(urls) {
    urls = [].concat.apply([],urls)
    urls.forEach((item, index) => {
      
    })
    shortToLong(access_token, url).then((res) => {
      let long = JSON.parse(res.data).urls[0].url_long
      if(long.match(/miaopai/g)``) {
          const audioUrl = long.match(/([^\/:\.][0-9a-zA-Z]+__)/g)[0]
          return `http://gslb.miaopai.com/stream/${audioUrl}.mp4`
      }
    })
    return url;
  }
  _handleWeiboList(weibo) {
    weibo = weibo || []
    const List = []
    const url_list = []
    weibo.forEach((item, index) => {
      const weibos = handleWeibo(item)
      List.push(weibos)
      url_list.push(weibos.short_urls)
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
          : <div onClick={this._logout.bind(this)}>加载中~~~</div>
        }
      </div>  
    );
  }
}

export default App;
