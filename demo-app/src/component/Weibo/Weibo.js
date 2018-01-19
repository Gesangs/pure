import React, { Component } from "react";
import ListImg  from "./ListImg";
import Content from "./Content";
import "./weibo.css";


class Weibo extends Component {
  constructor() {
    super();
  }

  render() {
    const { weibo, Emotion } = this.props;
    return (
      <div className="list">
        <div className="listHead">
          <img src={weibo.user.head_pic} className="listPic" />
          <div className="listNameS">
            <div className="listName">{weibo.user.name}</div>
            <div className="listSource">
              {weibo.time}
              {weibo.source ? "  来自  " : ""}
              {weibo.source}
            </div>
          </div>
        </div>
        <div className="listContent">
          <Content con={weibo.content} Emotion={Emotion} />
          {weibo.pic_urls.length ? <ListImg imgs={weibo.pic_urls} /> : ""}
        </div>
        {/* 转发的微博 */}
        {weibo.retweeted_status ? (
          <div className="retWeibo">
            <div className="retContent">
              <div>
                <a>@{weibo.retweeted_status.user.name}</a>:{" "}
                <Content
                  con={weibo.retweeted_status.content}
                  Emotion={Emotion}
                />
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
