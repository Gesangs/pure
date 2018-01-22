import React, { Component } from "react";
import { getComments } from "../../api/comment"
class Comment extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        getComments(id).then((res) => {
            console.log(res);
        })
    }
    render() {
        const userinfo = this.props.userinfo;
        return(
            <div>
                pinglunliebiao
            </div>
        )
    }
}

export default Comment

