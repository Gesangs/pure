import jsonp from './jsonp'
import { access_token } from "../config/config"

// 根据access_token获取用户uid
// http://open.weibo.com/wiki/2/account/get_uid
export function getUserUid() {
  const url = 'https://api.weibo.com/2/account/get_uid.json'
  const data = {
    access_token,
  }
  return jsonp(url, data)
}


// 根据用户Uid/screen_name获取用户信息
// http://open.weibo.com/wiki/2/users/show
export function getUserMsgByUid(uid) {
    const url = 'https://api.weibo.com/2/users/show.json'
    const data = {
      access_token,
      uid
    }
    return jsonp(url, data)
  }


  // 授权回收接口，帮助开发者主动取消用户的授权。
  // http://open.weibo.com/wiki/Oauth2/revokeoauth2
  export function Logout() {
    const url = 'https://api.weibo.com/oauth2/revokeoauth2'
    const data = {
      access_token,
    }
    return jsonp(url, data)
  }