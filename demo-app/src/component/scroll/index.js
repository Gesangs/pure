import React, { Component } from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { scrollDisplay } from "../../utils/pullToRefresh";
import "./style.css";


class Scroll extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.startY = 0
      this.deltaY = 0
      this.loadMore = null;
      this.refresh = null;
      this.islock = false;
  }
  componentDidMount() {
    scrollDisplay();
  }

  _handleTouchStart(e) {
    const touch = e.touches[0];
    this.startY = touch.pageY
  }
  // 下拉刷新
  _onPullDownRefresh() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      // this.props.onPullDownRefresh();
      this.refresh.style.transform = `translate3d(-50%,-120px,0)`;
    }, 600);
  }
  // 上拉加载
  _onReachBottom() {
    if(!this.props.onReachBottom) return
    const top = this.loadMore.getBoundingClientRect().top;
    const windowInnerHeight =
      window.screen.height ||
      window.innerHeight ||
      document.documentElement.clientHeight;
    if (top && top < windowInnerHeight && this.props.load_tip) {
      this.props.onReachBottom();
    }
  }
  _handleTouchMove(e) {
    const touch = e.touches[0];
    const fun = this.props.onPullDownRefresh;
    if(fun) {
      this.deltaY = (touch.pageY - this.startY) * 0.6;
      if (this.deltaY > 100) this.deltaY = 100;
      if (this.deltaY > 20 && window.scrollY === 0) {
        this.refresh.style.transform = `translate3d(-50%,${this.deltaY - 30}px,0)`;
        this.refresh.style.transition = `all 0s ease`;
      }
      if (this.deltaY === 100 && window.scrollY === 0)
        this._onPullDownRefresh();
    }
  }
  _handleTouchEnd(e) {
    this._onReachBottom();
    this.refresh.style.transition = `all 0.6s ease`;
    if (this.deltaY !== 100) {
      this.refresh.style.transform = `translate3d(-50%,-120px,0)`;
    }
  }
  render() {
    return (
      <div
        onTouchStart={this._handleTouchStart.bind(this)}
        onTouchMove={this._handleTouchMove.bind(this)}
        onTouchEnd={this._handleTouchEnd.bind(this)}
        className="wrapper">
        <div className="refresh" ref={(refresh) => {this.refresh = refresh}} />
        {this.props.children}
        <div
          className="loadMore"
          ref={(loadMore) => {this.loadMore = loadMore}}
          onClick={this._onReachBottom.bind(this)}>
          {this.props.load_tip ? "加载更多" : "没有更多了~"}
        </div>
      </div>
    );
  }
}

export default Scroll;
