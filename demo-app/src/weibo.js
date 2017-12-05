import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Weibo extends Component {
    constructor() {
        super()
    }

    render() {
        const { weibo } = this.props
        console.log(weibo)
        return(
            <div>
                <div>{weibo.name}</div>
                <div>{weibo.time}</div>
                <div>{weibo.head_pic}</div>
                <div>{weibo.source}</div>
                <div>{weibo.content}</div>
                <div>{weibo.reposts_count}</div>
            </div>
        )    
    }
}

export default Weibo