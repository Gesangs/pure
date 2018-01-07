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
    },200)
  }
  _handleTouchStart(e) {
    const touch = e.touches[0];
    this.state.startY = touch.pageY;
  }
  _handleTouchMove(e) {
    const scrollY = window.scrollY
    const touch = e.touches[0];
    this.state.deltaY = (touch.pageY - this.state.startY)*0.6;
    if (this.state.deltaY > 90) this.state.deltaY = 90;
    // 下拉刷新
    if (this.state.deltaY > 40 && !scrollY) {
      this.refs.refresh.style.transform = `translate3d(-50%,${this.state.deltaY -
        40}px,0)`;
      this.refs.refresh.style.transition = `all 0.2s ease`;
    }
    if(scrollY > this.state.refreshHeight) {
      console.log('aa')
    }
  }
  _handleTouchEnd(e) {
    this.refs.refresh.style.transition = `all 0.6s ease`;
    if (this.state.deltaY === 90) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.props.pullUpEvent();
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
      </div>
    );
  }
}


export default Scroll;