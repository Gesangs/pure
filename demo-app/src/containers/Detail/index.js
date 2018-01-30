import React, { Component } from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import { getWeiBoDetail } from "../../api/weibo";
import { getComments } from "../../api/comment";
import { handleCommentList } from "../../utils/class/comment";
import { handleWeibo } from "../../utils/class/weibo";
import { Control } from "react-keeper";

import Head from "./Head";
import Foot from "./Foot";
import Weibo from "../../component/Weibo/index";
import Comment from "../../component/Comment/index";
import Scroll from "../../component/scroll/index";

class Detail extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(
      this
    );
    this.state = {
      weibo: {},
      commentList: []
    };
  }
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
  componentDidMount() {
    // const id = this.props.params.id;
    // getWeiBoDetail(id).then((res) => {
    //     this.setState({
    //         weibo: handleWeibo(res.data.statuses)
    //     })
    //     console.log(res.data)
    // })
    this._getComments();
  }
  _getComments() {
    const id = this.props.params.id;
    getComments(id).then(res => {
      this.setState({
        commentList: handleCommentList(res.data.comments)
      });
    });
  }
  _getMoreComments() {
    let page = 2;
    const id = this.props.params.id;
    return getComments(id, page++).then(res => {
      const commentList = handleCommentList(res.data.comments);
      this.setState({
        commentList: [...this.state.commentList, ...commentList]
      });
    });
  }
  render() {
    const { commentList, weibo } = this.state;
    return (
      <div className="detail">
        <Head />
        <div style={{ height: 50 }} />
        <Scroll
          onPullDownRefresh={this._getComments.bind(this)}
          onReachBottom={this._getMoreComments.bind(this)}
          ref="scroll"
        >
          <Weibo weibo={Control.state.weibo} />
          <div
            style={{
              backgroundColor: "rgb(240, 240, 240)",
              width: "100%",
              height: 20
            }}
          />
          <Comment commentList={commentList} />
        </Scroll>
        <Foot />
      </div>
    );
  }
}

export default Detail;
