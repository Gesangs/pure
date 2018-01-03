import React, { Component } from "react";
import './style/headFoot.css'

class Foot extends Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div style={{ "bottom": -1 }} className="foot">
                footStyle
                <div className="qiuqiu"></div>
            </div>
        )
    }
}

export default Foot