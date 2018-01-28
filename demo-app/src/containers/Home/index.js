import React, { Component } from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getNewWeiBo } from "../../api/weibo";
import { handleWeiboList } from "../../utils/class/weibo";

import Scroll from "../../component/scroll/index";
import WeiboList from "../../component/WeiboList";

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      weiboList: [],
      page: 2
    };
  }
  componentWillMount() {
    this._getNewWeiBo();
  }

  _getNewWeiBo() {
    getNewWeiBo().then(res => {
      this.setState({
        weiboList: handleWeiboList(res.data.statuses)
      });
      console.log(res.data.statuses);
    });
  }
  _getMoreWeiBo() {
    let page = 2;
    return getNewWeiBo(page++).then(res => {
      const weiboList = handleWeiboList(res.data.statuses);
      this.setState({
        weiboList: [...this.state.weiboList, ...weiboList],
      });
      console.log(this.state.weiboList);
    });
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
          <WeiboList weiboList={weiboList} />
        </Scroll>
      </div>
    );
  }
}

export default Home


