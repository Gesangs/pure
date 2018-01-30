import jsonp from './jsonp';
import { access_token } from "../config/config"
import axios from 'axios'
// 获取当前登录用户及其所关注（授权）用户的最新微博
// http://open.weibo.com/wiki/2/statuses/home_timeline
export function getNewWeiBo(page = 1) {
  const url = 'https://api.weibo.com/2/statuses/home_timeline.json';

  const  data = {
      access_token,
      page,
      count:30
    }
  
  return jsonp(url, data)
}

// 根据微博ID获取单条微博内容
// http://open.weibo.com/wiki/2/statuses/show
export function getWeiBoDetail(id) {
  const url = 'https://api.weibo.com/2/statuses/show.json';

  const data = {
      access_token,
      id
    }
  return jsonp(url, data)
}

// 获取某个用户最新发表的微博列表
// http://open.weibo.com/wiki/2/statuses/user_timeline
export function getUserWeiBo(uid) {
  const url = 'https://api.weibo.com/2/statuses/user_timeline.json'
  const data = {
    access_token,
    uid
  }
  return jsonp(url, data)
}


// 获取指定微博的转发微博列表
// https://api.weibo.com/2/statuses/repost_timeline.json
export function getRepostWeiBo(id) {
  const url = 'https://api.weibo.com/2/statuses/user_timeline.json'
  const data = {
    access_token,
    id: id
  }
  return jsonp(url, data)
}

// http://open.weibo.com/wiki/2/emotions
// 获取微博官方表情的详细信息
export function getEmotions() {
  const url = 'https://api.weibo.com/2/emotions.json'
  const data = {
    access_token
  }
  return jsonp(url, data)
}

// http://open.weibo.com/wiki/2/short_url/expand
// 长链转短链
export function shortToLong(urls) {
  const data = {
    url: urls,
    access_token
  }
  return axios.get('/api/toLong',{
    params: data
  })
}
// http://gslb.miaopai.com/stream/.mp4
// const audioUrl = handleUrl(text.match(/(http:\/\/t.cn\/\w+)/g))


export function submit_text(status){
  
  var postData = {
    access_token,
    status: status
}

var config = {
    method: 'post',
    url: '/statuses/update.json',
    baseURL: "http://127.0.0.1:3002",
    data: postData,
    headers: {
        'Content-Type': 'application/json'
    }
}
  return axios(config)
}

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

export function repost(id){
  var data = {
    access_token,
    id
  }

  return axios.get('/api/repost',{
    params: data
  })

}