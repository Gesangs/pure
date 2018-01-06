import React, { Component } from "react";
import '../style/headFoot.css'

class Foot extends Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div >
                <div style={{ "bottom": -3 }} className="foot">
                    <div>主页</div>
                    <div>消息</div>
                    <div>热门</div>
                </div>
                <div className="qiuqiu"></div>
            </div>
        )
    }
}

export default Foot