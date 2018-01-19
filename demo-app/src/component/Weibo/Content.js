import React, { Component } from "react";
class Content extends Component {
    constructor() {
      super();
    }
    getEmotion(key) {
      const value = this.props.Emotion.find(function(item, index, arr) {
        return item.value === key;
      });
      if (!value) return;
      else return value.url;
    }
    handleNodes(text) {
      const pattern = /([^>]*)(<([a-z/][-a-z0-9_:.]*)[^>/]*(\/*)>)([^<]*)/g,
        nodes = [];
      let matchArr;
      while ((matchArr = pattern.exec(text))) {
        if (matchArr[1]) nodes.push(["text", matchArr[1]]);
        switch (matchArr[3]) {
          case "user":
            nodes.push(["user", matchArr[5]]);
            break;
          case "all":
            nodes.push(["all", matchArr[5]]);
            break;
          case "topic":
            nodes.push(["topic", matchArr[5]]);
            break;
          case "icon":
            nodes.push(["icon", this.getEmotion(matchArr[5])]);
            break;
          case "url":
            nodes.push(["url", matchArr[5]]);
            break;
          default:
            nodes.push(["text", matchArr[5]]);
            break;
        }
      }
      return nodes;
    }
    render() {
      const content = this.handleNodes(this.props.con);
      return (
        <div>
          {content.map((item, index) => {
            return (
              <span key={index}>
                {item[0] === "user" ? (
                  <a>{item[1]}</a>
                ) : item[0] === "all" ? (
                  <a>{item[1]}</a>
                ) : item[0] === "icon" ? (
                  <img src={item[1]} style={{ width: 18, height: 18 }} />
                ) : item[0] === "text" ? (
                  item[1]
                ) : item[0] === "topic" ? (
                  <a>{item[1]}</a>
                ) : item[0] === "url" ? (
                  <a href={item[1]}> 查看原链接</a>
                ) : null}
              </span>
            );
          })}
        </div>
      );
    }
  }

  export default Content;