import React, { Component } from "react";
import './style/headFoot.css'
class Head extends Component {
  constructor() {
    super();
    this.state = {
      currentTop: 0
    };
  }

  componentDidMount() {
    const head = document.querySelector(".head");
    const foot = document.querySelector(".foot");
    const qiuqiu = document.querySelector(".qiuqiu");
    let num = 0;
    window.onscroll = () => {
      let direction = window.scrollY - this.state.currentTop;

      if (direction > 0) {
        num += 5;
        if (num > 55) num = 55;
        if (num === 55) { 
            foot.style.bottom = `-55px`;
            qiuqiu.style.bottom = `-68px`;
        }
      } else {
        num -= 8;
        if (num < 0) num = 1;
        if (num === 1) { 
            foot.style.bottom = `-1px`;
            qiuqiu.style.bottom = `75px`;
        }
      }

      head.style.top = `-${num}px`;
      this.state.currentTop = window.scrollY;
    };
  }
  render() {
    return (
      <div style={{ 'top': 0 }} className="head">
        headStyle
      </div>
    );
  }
}

export default Head;
