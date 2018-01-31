import React, { Component } from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
class AtMeComment extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      }
    render() {
        return (
            <h1>AtMeComment</h1>
        )
    }
}

export default AtMeComment