import React, { Component } from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getComments } from "../../api/comment"
import Content from "../../component/Weibo/Content"
import { stopPro } from "../../utils/stopPro"
import { Control } from "react-keeper";
import "./style.css"
class Comment extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    goToUser(user, e) {
        stopPro(e)
        Control.go(`/user/${user.id}`, { user })
        setTimeout(() => {
          document.getElementsByClassName("Index")[0].style.display = 'none';
        // console.log(user)
        },200)
      }
    render() {
        const comments = this.props.commentList;
        return(
            <div>
            {comments.map((item, index) => (
                <div className="commentList" key={index}>
                    <div className="listHead">
                        <img src={item.user.head_pic} className="listPic" onClick={this.goToUser.bind(this, item.user)} />
                        <div className="listNameS">
                            <span className="listName" onClick={this.goToUser.bind(this, item.user)}>{item.user.name}</span>
                            <div className="listSource">
                            {item.create_time}
                            {item.source ? "  来自  " : ""}
                            {item.source}
                            </div>
                        </div>
                    </div>
                    <Content con={item.content} />
                </div>
            ))}
            </div>
        )
    }
}

export default Comment

