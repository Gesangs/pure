import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Weibo from './weibo'

class WeiboList extends Component {
    constructor() {
        super()
    }

    render() {
        const weiboList = this.props.list;
        return(
            <div>
             {weiboList.map((item, index) => {
                 return <div>
                    <div>{item.name}</div>
                    <div>{item.time}</div>
                    <img src={item.head_pic} />
                    <div>{item.source}</div>
                    <div>{item.content}</div>
                    <div>{item.reposts_count}</div>
                 </div>
             })}
          </div>
        )    
    }
}

export default WeiboList