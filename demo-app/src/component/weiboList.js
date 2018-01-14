import React, { Component } from "react";
import { getNewWeiBo, getEmotions } from "../api/weibo";
import { handleWeibo } from "../base/class/weibo";
import Scroll from '../containers/scroll'
import "../style/weiboList.css";
import Weibo from "./weibo";

class WeiboList extends Component {
  constructor() {
    super();
    this.state = {
      weiboList: [],
      page: 2,
      Emotion:[]
    };
  }

  componentWillMount() {
    this._getNewWeiBo();
    getEmotions().then((res) => {
      this.setState({
        Emotion: res.data
      })
    })
  }
  componentDidMount() {
    this.refs.scroll._getRefreshHeight()
  }
  
  _getNewWeiBo(){
    getNewWeiBo().then(res => {
      console.log(res.data.statuses);
      this.setState({
        weiboList: this._handleWeiboList(res.data.statuses)
      });
    });
  }
  _getMoreWeiBo() {
    getNewWeiBo(this.state.page).then(res => {
      const weiboList = this._handleWeiboList(res.data.statuses)
      this.setState({
        weiboList: [...this.state.weiboList, ...weiboList],
        page: this.state.page + 1
      });
      console.log(this.state.weiboList)
    });
  }
  _handleWeiboList(weibos) {
    weibos = weibos || []
    const List = []
    weibos.forEach((item, index) => {
      const weibo = handleWeibo(item)
      List.push(weibo)
    });
    return List
  }

  render() {
    const weiboList = this.state.weiboList;
    const Emotion = this.state.Emotion;
    return (
      <div className="weiboList">
        <Scroll onPullDownRefresh={this._getNewWeiBo.bind(this)}
                onReachBottom={this._getMoreWeiBo.bind(this)}
                ref="scroll">
          {weiboList.map((item, index) => <Weibo weibo={item} Emotion={Emotion} key={index} />)}
        </Scroll>
      </div>
    );
  }
}

export default WeiboList;
