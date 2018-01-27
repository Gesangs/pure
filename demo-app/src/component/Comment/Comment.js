import React, { Component } from "react";
import { getComments } from "../../api/comment"
import Content from "../../component/Weibo/Content"
import { stopPro } from "../../utils/stopPro"
import { Control } from "react-keeper";
import "./style.css"
class Comment extends Component {
    constructor() {
        super()
    }
    goToUser(user, e) {
        stopPro(e)
        // Control.go(`/user/${user.id}`, { user })
        // setTimeout(() => {
        //   document.getElementsByClassName("Index")[0].style.display = 'none';
        // console.log(user)
        // },200)
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
                            <div className="listName" onClick={this.goToUser.bind(this, item.user)}>{item.user.name}</div>
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

