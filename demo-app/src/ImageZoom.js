import React, { Component } from "react";


class ImageZoom extends Component {
  constructor() {
    super();
    this.state = {
      isFull: false
    }
  }

  toggleFull() {
    this.setState({
      isFull: !this.state.isFull
    })
  }
  render() {
    const img = this.props.imgs;
    const isFull = this.state.isFull;
    return (
      <div className={isFull ? "fullImg" : ""}>
        <div className={isFull ? "listImg" : "listImg"}>
          {img.map((item, index) => {
            return (
              <div className={isFull ? "weiboImg" : "weiboImg"}
                  key={index}
                  style={{backgroundImage:`url(${item.thumbnail_pic})`}}
                  onClick={this.toggleFull.bind(this)}>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


  export default ImageZoom