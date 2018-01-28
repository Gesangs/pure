import React, { Component } from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
class ListImg extends Component {
    constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        isFull: false
      };
    }
    render() {
      const imgs = this.props.imgs;
      return (
        <div className="listImg">
          {imgs.map((item, index) => {
            const imgUrl = item.thumbnail_pic
              .replace(/wx1\./, "wx2.")
              .replace(/thumbnail/, "orj360");
            return (
              <div
                className="weiboImg"
                key={index}
                style={{ backgroundImage: `url(${imgUrl})` }}
              />
            );
          })}
        </div>
      );
    }
  }

  export default ListImg