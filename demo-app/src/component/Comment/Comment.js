import React, { Component } from "react";
import { getComments } from "../../api/comment"
import { handleCommentList } from "../../utils/class/comment"
import Content from "../../component/Weibo/Content"
import "./style.css"
class Comment extends Component {
    constructor() {
        super()
        this.state = {
            commentList: []
        }
    }
    componentDidMount() {
        const id = this.props.params.id;
        getComments(id).then((res) => {
            this.setState({
                commentList: handleCommentList(res.data.comments)
            });
            console.log(this.state.commentList)
        })
    }
    render() {
        const comments = this.state.commentList;
        return(
            <div>
            {comments.map((item, index) => (
                <div>
                    <img src={item.user.head_pic} />
                    <p>{item.user.name}</p>
                    <div>
                        <span>{item.create_time}</span>
                        来自
                        <span>{item.source}</span>
                        <span>{item.number}</span>
                    </div>
                    <Content con={item.content} />
                </div>
            ))}
            </div>
        )
    }
}

export default Comment

