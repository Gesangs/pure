import React, { Component } from "react";
import ListImg  from "./ListImg";
import Content from "./Content";
import { stopPro } from "../../utils/stopPro"
import { Control } from "react-keeper";
// import { Link } from "react-router-dom"
import "./weibo.css";


class Weibo extends Component {
  constructor() {
    super();
  }

  goToUser(id, e) {
    stopPro(e)
    Control.go(`/user/${id}`)
    setTimeout(() => {
      document.getElementsByClassName("Index")[0].style.display = 'none';
    },200)
  }
  render() {
    const { weibo } = this.props;
    return (
      // <Link className="list" onClick={stopPro} to="`/detail/${weibo.id}`">
      <div className="list">
        <div className="listHead">

          <img src={weibo.head_pic} className="listPic" onClick={this.goToUser.bind(this, weibo.userId)} />
          <div className="listNameS">
            <div className="listName" onClick={this.goToUser.bind(this, weibo.userId)}>{weibo.name}</div>
            <div className="listSource">
              {weibo.time}
              {weibo.source ? "  来自  " : ""}
              {weibo.source}
            </div>
          </div>
        </div>
        <div className="listContent">
          <Content con={weibo.content} />
          {weibo.pic_urls.length ? <ListImg imgs={weibo.pic_urls} /> : ""}
        </div>
        {/* 转发的微博 */}
        {weibo.retweeted_status ? (
          <div className="retWeibo">
            <div className="retContent">
              <div>
                <a onClick={this.goToUser.bind(this, weibo.retweeted_status.userId)}>@{weibo.retweeted_status.name}</a>:{" "}
                <Content con={weibo.retweeted_status.content} />
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
      {/* </Link> */}
      </div>
    );
  }
}

export default Weibo;
