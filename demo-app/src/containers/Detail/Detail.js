import React, { Component } from "react";
import { getWeiBoDetail } from "../../api/weibo"
import Comment from "../../component/Comment/Comment"
import { getComments } from "../../api/comment"
import { handleCommentList } from "../../utils/class/comment"
import Weibo from "../../component/Weibo/Weibo";
import { handleWeibo } from "../../utils/class/weibo";
import { Control } from "react-keeper";
import Scroll from "../../component/scroll/Scroll";

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            weibo: {},
            commentList: [],
        }
    }

    componentDidMount() {
        // const id = this.props.params.id;
        // getWeiBoDetail(id).then((res) => {
        //     this.setState({
        //         weibo: handleWeibo(res.data.statuses)
        //     })
        //     console.log(res.data)
        // })
        this._getComments()
    }
    _getComments(){
        const id = this.props.params.id;
        getComments(id).then((res) => {
            this.setState({
                commentList: handleCommentList(res.data.comments)
            });
        })
    }
    _getMoreComments(){
        let page = 2;
        const id = this.props.params.id;
        return getComments(id, page++).then((res) => {
            const commentList = handleCommentList(res.data.comments)
            this.setState({
                commentList: [...this.state.commentList, ...commentList],
            });
        })
    }
    render() {
        const { commentList, weibo } = this.state;
        return (
            <div>
                <Weibo weibo={Control.state.weibo} />
                <div style={{ backgroundColor: "rgb(240, 240, 240)",width: "100%",height:20 }}></div>
                <Scroll
                onPullDownRefresh={this._getComments.bind(this)}
                onReachBottom={this._getMoreComments.bind(this)}
                ref="scroll"
                >
                    <Comment commentList={commentList} />
                </Scroll>
            </div>
        )
    }
}

export default Detail