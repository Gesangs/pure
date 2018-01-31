import jsonp from './jsonp'
import { access_token } from "../config/config"
import axios from 'axios'
// 根据微博ID返回某条微博的评论列表
// http://open.weibo.com/wiki/2/comments/show

export function getComments(id, page = 1) {
    const url = 'https://api.weibo.com/2/comments/show.json'
    const data = {
        access_token,
        id,
        page
    }
    return jsonp(url, data)
}

// 获取最新的提到当前登录用户的评论，即@我的评论
// http://open.weibo.com/wiki/2/comments/mentions

export function getAtMeComments(page = 1) {
  const url = 'https://api.weibo.com/2/comments/mentions.json'
  const data = {
      access_token,
      page
  }
  return jsonp(url, data)
}

// 获取当前登录用户所发出的评论列表
// http://open.weibo.com/wiki/2/comments/by_me

export function getCommentsByMe(page = 1) {
  const url = 'https://api.weibo.com/2/comments/by_me.json'
  const data = {
      access_token,
      page
  }
  return jsonp(url, data)
}

// 获取当前登录用户所接收到的评论列表
// http://open.weibo.com/wiki/2/comments/to_me

export function getCommentsToMe(page = 1) {
  const url = 'https://api.weibo.com/2/comments/to_me.json'
  const data = {
      access_token,
      page
  }
  return jsonp(url, data)
}

// 获取最新的提到登录用户的微博列表，即@我的微博
// http://open.weibo.com/wiki/2/statuses/mentions
export function getAtMeWeiBo(page = 1) {
  const url = 'https://api.weibo.com/2/statuses/mentions.json';

  const  data = {
      access_token,
      page,
      count:30
    }
  
  return jsonp(url, data)
}


// 评论一条微博
// http://open.weibo.com/wiki/2/comments/create
export function create_comment(comment, id){
    var data = {
      access_token,
      comment,
      id
    }
  
    return axios.get('/api/comment_create',{
      params: data
    })
  }


// 回复一条评论
// http://open.weibo.com/wiki/2/comments/reply
  export function reply_comment(comment, id, cid){
    var data = {
      access_token,
      comment,
      id,
      cid
    }
  
    return axios.get('/api/reply_create',{
      params: data
    })
  }

  