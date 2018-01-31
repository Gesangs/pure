import React, { Component } from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
class CommentByMe extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      }
    render() {
        return (
            <h1>CommentByMe</h1>
        )
    }
}

export default CommentByMe