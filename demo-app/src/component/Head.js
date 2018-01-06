import React, { Component } from "react";
import "../style/headFoot.css";
class Head extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div style={{ top: 0 }} className="head">
          <div>菜单</div>
          <div>全部微博</div>
        </div>
      </div>
    );
  }
}

export default Head;
