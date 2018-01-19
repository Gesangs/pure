import React, { Component } from "react";
import { getNewWeiBo } from "../api/weibo";
import { handleWeibo } from "../utils/class/weibo";
import { connect } from 'react-redux'
import Scroll from "../component/Scroll";
import Weibo from "../component/Weibo/Weibo";
import "../style/weiboList.css";

class WeiboList extends Component {
  constructor() {
    super();
    this.state = {
      weiboList: [],
      page: 2
    };
  }

  componentWillMount() {
    this._getNewWeiBo();
  }
  componentDidMount() {
    this.refs.scroll._getRefreshHeight();
  }

  _getNewWeiBo() {
    getNewWeiBo().then(res => {
      console.log(res.data.statuses);
      this.setState({
        weiboList: this._handleWeiboList(res.data.statuses)
      });
    });
  }
  _getMoreWeiBo() {
    getNewWeiBo(this.state.page).then(res => {
      const weiboList = this._handleWeiboList(res.data.statuses);
      this.setState({
        weiboList: [...this.state.weiboList, ...weiboList],
        page: this.state.page + 1
      });
      console.log(this.state.weiboList);
    });
  }
  _handleWeiboList(weibos) {
    weibos = weibos || [];
    const List = [];
    weibos.forEach((item, index) => {
      const weibo = handleWeibo(item);
      List.push(weibo);
    });
    return List;
  }

  render() {
    const weiboList = this.state.weiboList;
    return (
      <div className="weiboList">
        <Scroll
          onPullDownRefresh={this._getNewWeiBo.bind(this)}
          onReachBottom={this._getMoreWeiBo.bind(this)}
          ref="scroll"
        >
          {weiboList.map((item, index) => (
            <Weibo weibo={item} key={index} Emotion={this.props.emotion.emotion} />
          ))}
        </Scroll>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    emotion: state.emotion
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeiboList)
