import React, { Component } from "react";
import "./style.css"
import { scrollDisplay } from "../../utils/pullToRefresh"


class Scroll extends Component {
  constructor() {
    super();
    this.state = {
      startY: 0,
      deltaY: 0,
    };
  }
  componentDidMount() {
    scrollDisplay();
  }
  
  _handleTouchStart(e) {
    const touch = e.touches[0];
    this.setState({
      startY: touch.pageY
    })
  }
  // 下拉刷新
  _onPullDownRefresh() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
        this.props.onPullDownRefresh();
        this.refs.refresh.style.transform = `translate3d(-50%,-120px,0)`;
      }, 600)
  }
  // 上拉加载
  _onReachBottom(){
    const loadMore = this.refs.loadMore
    const top = loadMore.getBoundingClientRect().top;
    const windowInnerHeight = window.screen.height || window.innerHeight || document.documentElement.clientHeight;
    if(top && top <windowInnerHeight) {
      this.props.onReachBottom()
    }
  }
  _handleTouchMove(e) {
    const touch = e.touches[0];
    this.state.deltaY = (touch.pageY - this.state.startY)*0.6;
    if (this.state.deltaY > 110) this.state.deltaY = 110;
    if (this.state.deltaY > 20 && window.scrollY === 0) {
      this.refs.refresh.style.transform = `translate3d(-50%,${this.state.deltaY -
        30}px,0)`;
      this.refs.refresh.style.transition = `all 0s ease`;
    }
    if(this.state.deltaY >= 90 && window.scrollY === 0) this._onPullDownRefresh();
  }
  _handleTouchEnd(e) {
    this._onReachBottom()
    this.refs.refresh.style.transition = `all 0.6s ease`;
    if (this.state.deltaY !== 110) {
      this.refs.refresh.style.transform = `translate3d(-50%,-120px,0)`; 
    }
  }
  render() {
    return ( 
      <div onTouchStart = {this._handleTouchStart.bind(this)}
           onTouchMove = {this._handleTouchMove.bind(this)}
           onTouchEnd = {this._handleTouchEnd.bind(this)}
           className="wrapper" >
      <div className = "refresh" ref = "refresh"></div>
      {this.props.children}
      <div className="loadMore" ref="loadMore" onClick={this._onReachBottom.bind(this)}>加载更多</div>
      </div>
    );
  }
}


export default Scroll;