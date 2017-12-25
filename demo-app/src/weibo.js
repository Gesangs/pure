import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style/weibo.scss";
import { Emotion } from "./base/emotion";

class ListImg extends Component {
  constructor() {
    super();
  }
  render() {
    const img = this.props.imgs;
    return (
      <div className="listImg">
        {img.map((item, index) => {
          return (
            <div className={img.length !== 1 ? "weiboImg" : ""}
                 key={index}
                 style={{backgroundImage:`url(${item.thumbnail_pic})`}}>
            </div>
          );
        })}
      </div>
    );
  }
}

class ListContent extends Component {
  constructor() {
    super();
  }
  getEmotion(key) {
    console.log(Emotion)
    const value = Emotion.find(function(item, index, arr) {
      return item.value === key;
    });
    if(!value) return;
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
              {item[0] === "user" ? <a>{item[1]}</a> : ""}
              {item[0] === "all" ? <a>{item[1]}</a> : ""}
              {item[0] === "icon" ? <img src={item[1]} /> : ""}
              {item[0] === "text" ? <span>{item[1]}</span> : ""}
              {item[0] === "topic" ? <a>{item[1]}</a> : ""}
              {item[0] === "url" ? <a href={item[1]}> 查看原链接</a> : ""}
            </span>
          );
        })}
      </div>
    );
  }
}

class Weibo extends Component {
  constructor() {
    super();
  }

  render() {
    const { weibo } = this.props;
    return (
      <div className="list">
        <div className="listHead">
          <img src={weibo.head_pic} className="listPic" />
          <div className="listNameS">
            <div className="listName">{weibo.name}</div>
            <div className="listSource">
              {weibo.time} 来自 {weibo.source}
            </div>
          </div>
        </div>
        <div className="listContent">
          <ListContent con={weibo.content} />
          {weibo.pic_urls.length ? <ListImg imgs={weibo.pic_urls} /> : ""}
          {/* 秒拍视频 */}
          {weibo.videoUrl ? (
            <div>
              <video src={weibo.videoUrl} />
            </div>
          ) : (
            ""
          )}
        </div>
        {/* 转发的微博 */}
        {weibo.retweeted_status ? (
          <div className="retWeibo">
            <div className="retContent">
              <div>
                <a>{weibo.retweeted_status.name}</a>:{" "}
                <ListContent con={weibo.retweeted_status.content} />
              </div>
              {weibo.retweeted_status.pic_urls.length ? (
                <ListImg imgs={weibo.retweeted_status.pic_urls} />
              ) : (
                ""
              )}
            </div>
            <div className="retFoot">
              {weibo.retweeted_status.reposts_count} |{" "}
              {weibo.retweeted_status.comments_count} |{" "}
              {weibo.retweeted_status.attitudes_count}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="listFoot">
          <div>{weibo.reposts_count}</div>
          <div>{weibo.comments_count}</div>
          <div>{weibo.attitudes_count}</div>
        </div>
      </div>
    );
  }
}

export default Weibo;
