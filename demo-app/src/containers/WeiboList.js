import React, { Component } from "react";
import { connect } from 'react-redux'
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
          <Weibo weibo={item} key={index} Emotion={this.props.emotion.emotion} />
        ))}
      </div>
    )
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