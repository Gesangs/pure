import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './style/weibo.scss'

class ListImg extends Component {
    constructor() {
        super()
    }
    render() {
        const img = this.props.imgs;
        return(
            <div className='listImg'>
                {img.map((item, index) => {
                    return <div className={img.length !== 1 ? 'weiboImg' : ''}>
                        <img src={item.thumbnail_pic} key={index} className='img' />
                    </div>
                })}
            </div>
        )
    }
}

// class ListContent extends Component {
//     constructor() {
//         super()
//     }
//     render() {
//         const content = this.props.con;
//         return(
//             <div>
//                 {content.map((item, index) => {
//                     return <div>
//                     {switch(Object.keys(item)) {
//                         case 'user':
//                             return <span>Object.values(item)</span>;break;
//                         case 'all':
//                             return <span>Object.values(item)</span>;break;
//                         case 'topic':
//                             return <span>Object.values(item)</span>;break;
//                         case 'icon':
//                             return <span>Object.values(item)</span>;break;
//                         default:
//                             return <span>Object.values(item)</span>;break;
//                     }}
//                     </div>
//                 })}
//             </div>
//         )
//     }
// }

class Weibo extends Component {
    constructor() {
        super()
    }

    render() {
        const { weibo } = this.props
        return(
            <div className='list'>
                <div className='listHead'>
                    <img src={ weibo.head_pic } className='listPic' />
                    <div className='listNameS'>
                        <div className='listName'>{ weibo.name }</div>
                        <div className='listSource'>{ weibo.time }  来自  { weibo.source }</div>
                    </div>    
                </div>
                <div className='listContent'>
                    <div>{weibo.content}</div>
                    { weibo.pic_urls.length ? <ListImg imgs={weibo.pic_urls} /> : '' }
                </div>
                {weibo.retweeted_status ? <div className='retWeibo'>
                    <div className='retContent'>
                        <div>{weibo.retweeted_status.name}: {weibo.retweeted_status.content}</div>
                        {weibo.retweeted_status.pic_urls.length ? <ListImg imgs={weibo.retweeted_status.pic_urls} /> : ''}
                    </div>
                    <div className='retFoot'>
                        {weibo.retweeted_status.reposts_count} | {weibo.retweeted_status.comments_count} | {weibo.retweeted_status.attitudes_count}
                    </div>
                </div> : ''}
                <div className='listFoot'>
                    <div>{weibo.reposts_count}</div>
                    <div>{weibo.comments_count}</div>
                    <div>{weibo.attitudes_count}</div>
                </div>
            </div>
        )    
    }
}

export default Weibo