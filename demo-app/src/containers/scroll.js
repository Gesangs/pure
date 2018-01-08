import React, { Component } from "react";
import "../style/headFoot.css"


class Scroll extends Component {
  constructor() {
    super();
    this.state = {
      startY: 0,
      deltaY: 0,
      refreshHeight:0
    };
  }
  componentDidMount() {
    this._getRefreshHeight()
  }
  _getRefreshHeight() {
    const screenHeight = window.screen.height;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      let containerHeight =  window.getComputedStyle(this.refs.container, null).height;
      this.setState({
        refreshHeight: containerHeight.replace(/px/,'') - screenHeight + 45
      })
      console.log(this.state.refreshHeight)
    },300)
  }
  _handleTouchStart(e) {
    const touch = e.touches[0];
    this.state.startY = touch.pageY;
  }
  _handleTouchMove(e) {
    const touch = e.touches[0];
    this.state.deltaY = (touch.pageY - this.state.startY)*0.6;
    if (this.state.deltaY > 90) this.state.deltaY = 90;
    // 下拉刷新
    if (this.state.deltaY > 40 && window.scrollY === 0) {
      this.refs.refresh.style.transform = `translate3d(-50%,${this.state.deltaY -
        40}px,0)`;
      this.refs.refresh.style.transition = `all 0.2s ease`;
    }
  }
  _throttle(fn,delay){
    let timers=null;
    return function(){
      const context=this, args=arguments;
      clearTimeout(timers);
      timers=setTimeout(function(){
          fn.apply(context, args);
      },delay);
    }
  }
  _handleTouchEnd(e) {
    // 上拉加载
    if(window.scrollY > this.state.refreshHeight) {
      const fn = this.props.onReachBottom()
      this._throttle(fn, 300);
      this._getRefreshHeight();
    }
    this.refs.refresh.style.transition = `all 0.6s ease`;
    if (this.state.deltaY === 90) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.props.onPullDownRefresh();
        this.refs.refresh.style.transform = `translate3d(-50%,-120px,0)`;
      }, 600)
    } else {
      this.refs.refresh.style.transform = `translate3d(-50%,-120px,0)`;
    }

  }
  render() {
    return ( 
      <div onTouchStart = {this._handleTouchStart.bind(this)}
           onTouchMove = {this._handleTouchMove.bind(this)}
           onTouchEnd = {this._handleTouchEnd.bind(this)}
           ref = "container" >
      <div className = "refresh" ref = "refresh"></div>
      {this.props.children}
      {} 
      </div>
    );
  }
}


export default Scroll;