import jsonp from './../base/jsonp'


// 获取当前登录用户及其所关注（授权）用户的最新微博
// http://open.weibo.com/wiki/2/statuses/home_timeline
export function getNewWeiBo(ass) {
  const url = 'https://api.weibo.com/2/statuses/home_timeline.json'
  const data = {
    access_token: ass
  }
  return jsonp(url, data)
}


// 获取某个用户最新发表的微博列表
// http://open.weibo.com/wiki/2/statuses/user_timeline
export function getUserWeiBo(ass) {
  const url = 'https://api.weibo.com/2/statuses/user_timeline.json'
  const data = {
    access_token: ass
  }
  return jsonp(url, data)
}


// 获取指定微博的转发微博列表
// https://api.weibo.com/2/statuses/repost_timeline.json
export function getRepostWeiBo(ass, id) {
  const url = 'https://api.weibo.com/2/statuses/user_timeline.json'
  const data = {
    access_token: ass,
    id: id
  }
  return jsonp(url, data)
}