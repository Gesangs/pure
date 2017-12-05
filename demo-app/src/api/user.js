import jsonp from './../base/jsonp'


// 根据用户ID获取用户信息
// https://api.weibo.com/2/users/show.json
export function getUserMag(ass, id) {
    const url = 'https://api.weibo.com/2/statuses/home_timeline.json'
    const data = {
      access_token: ass,
      id
    }
    return jsonp(url, data)
  }


  // 授权回收接口，帮助开发者主动取消用户的授权。
  // http://open.weibo.com/wiki/Oauth2/revokeoauth2
  export function Logout(ass) {
    const url = 'https://api.weibo.com/oauth2/revokeoauth2'
    const data = {
      access_token: ass,
    }
    return jsonp(url, data)
  }