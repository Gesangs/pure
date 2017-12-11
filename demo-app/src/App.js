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
  // 提取短链一次性提交上去转成原始链接,获取视频
  _handleUrl(list, urls) {
    urls = [].concat.apply([],urls)
    shortToLong(access_token, urls).then((res) => {
      const url_result = JSON.parse(res.data)
      this._concatVideoUrl(list, url_result)
    })
  }
  _concatVideoUrl(list, url) {
    url.urls.map((item, index) => {
      if(new RegExp("miaopai").test(item.url_long)) {
        const video_url = `http://gslb.miaopai.com/stream/${item.url_long.split('/')[4].split('.')[0]}.mp4`
        const index = list.findIndex(function(value) { 
          return new RegExp(item.url_short).test(value.short_urls.join(''))
        })
        Object.assign(list[index], {videoUrl: video_url })
      }
    })
  }
  _handleWeiboList(weibos) {
    weibos = weibos || []
    const List = []
    const url_list = []
    weibos.forEach((item, index) => {
      const weibo = handleWeibo(item)
      List.push(weibo)
      if(weibo.short_urls) url_list.push(weibo.short_urls)
    });
    this._handleUrl(List, url_list)
    console.log(List)
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
