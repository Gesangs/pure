import jsonp from './jsonp'
import { access_token } from "../config/config"

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