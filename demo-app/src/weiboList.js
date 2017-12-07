import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './style/weiboList.scss'
import Weibo from './weibo'

class WeiboList extends Component {
    constructor() {
        super()
    }

    render() {
        const weiboList = this.props.list;
        return(
            <div className='weiboList'>
             {weiboList.map((item, index) => <Weibo weibo={item} key={index} />)}
          </div>
        )    
    }
}

export default WeiboList