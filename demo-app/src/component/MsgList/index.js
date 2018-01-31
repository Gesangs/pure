import React, { Component } from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Scroll from "../scroll/index"
import * as api from "../../api/comment"

class MsgList extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: {},
        }
        
      }
      componentDidMount() {
          this._getNewData();
      }
      _getNewData(){
        const fun = api[this.props.getNewData];
        api.getCommentsToMe().then((res) => {
            console.log(res);
        })
      }
    
    render() {
        return (
            <Scroll>

            </Scroll>
        )
    }
}

export default MsgList