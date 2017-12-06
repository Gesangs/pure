import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Weibo from './weibo'
import './weiboList.scss'

class WeiboList extends Component {
    constructor() {
        super()
    }

    render() {
        const weiboList = this.props.list;
        console.log(weiboList)
        return(
            <div>
             {weiboList.map((item, index) => {
                 return <div>
                    <div className='listHead'>
                        <img src={item.head_pic} className='listPic' />
                        <div>{item.name}</div>
                        <div>{item.time}  来自  {item.source}</div>
                    </div>
                    <div>
                        {item.content}
                    </div>
                    <div>
                        <div>{item.reposts_count}</div>
                        <div>{item.comments_count}</div>
                        <div>{item.attitudes_count}</div>
                    </div>
                 </div>
             })}
          </div>
        )    
    }
}

export default WeiboList