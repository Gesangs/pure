import React, { Component } from "react";

import Weibo from "../component/Weibo/Weibo";

class WeiboList extends Component{
  constructor() {
    super()
  }
  render() {
    const weiboList = this.props.weiboList;
    return(
      <div style={{ paddingTop: 1}}>
        {weiboList.map((item, index) => (
          <Weibo weibo={item} key={index} />
        ))}
      </div>
    )
  }
}

export default WeiboList