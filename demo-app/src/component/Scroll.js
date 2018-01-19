import React, { Component } from "react";
import "../style/headFoot.css"


class Scroll extends Component {
  constructor() {
    super();
    this.state = {
      startY: 0,
      deltaY: 0,
      refreshHeight: 0
    };
  }
  _getRefreshHeight() {
    const windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      let containerHeight = window.getComputedStyle(this.refs.container).height;
      this.setState({
        refreshHeight: Number.parseInt(containerHeight.replace(/px/, '') - windowInnerHeight)
      })
      console.log(this.state.refreshHeight)
    },500)
  }
   // 下拉刷新
  _onPullDownRefresh() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
        this.props.onPullDownRefresh();
        this._getRefreshHeight();
        this.refs.refresh.style.transform = `translate3d(-50%,-120px,0)`;
      }, 600)
  }
  
  _handleTouchStart(e) {
    const touch = e.touches[0];
    this.state.startY = touch.pageY;
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
  // _throttle(fn,delay){
  //   let timers=null;
  //   return function(){
  //     const context=this, args=arguments;
  //     clearTimeout(timers);
  //     timers=setTimeout(function(){
  //         fn.apply(context, args);
  //     },delay);
  //   }
  // }
  _handleTouchEnd(e) {
    this.refs.refresh.style.transition = `all 0.6s ease`;
    if (this.state.deltaY !== 110) {
      this.refs.refresh.style.transform = `translate3d(-50%,-120px,0)`; 
    }
    const isGetMore = Math.max(Number.parseInt(window.scrollY), Number.parseInt(this.state.refreshHeight)) === Number.parseInt(window.scrollY)
    if (isGetMore) {
      this.setState({ refreshHeight: this.state.refreshHeight + 20000 })
      this.props.onReachBottom()
      this._getRefreshHeight()
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