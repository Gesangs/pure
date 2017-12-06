import Moment from '../moment.js'


export default class Weibo {
    constructor({
        id,
        mid,
        name,
        time,
        head_pic,
        // 来自
        source,
        content,
        // 是否收藏
        favorited,
        // 转发数
        reposts_count,
        // 评论数
        comments_count,
        // 点赞数
        attitudes_count,
        // 被转发的原微博
        retweeted_status
    }) {
        this.id = id
        this.mid = mid
        this.name = name
        this.time = time
        this.head_pic = head_pic
        this.source = source
        this.content = content
        this.favorited = favorited
        this.reposts_count = reposts_count
        this.comments_count = comments_count
        this.attitudes_count = attitudes_count
        this.retweeted_status = retweeted_status
    }
}

function handleRetWeibo(weibo) {
    return new Weibo({
        
    })
}
export function handleWeibo(weibo) {
    return new Weibo({
        id: weibo.id,
        mid: weib.mid,
        name: weibo.user.screen_name,
        time: Moment(weibo.created_at).fromNow(),
        head_pic: weibo.user.profile_image_url,
        source: (weibo.source).replace(/<[^>]+>/g, ""),
        content: weibo.text,
        favorited: weibo.favorited,
        reposts_count: weibo.reposts_count,
        comments_count: weibo.comments_count,
        attitudes_count: weibo.attitudes_count,
        retweeted_status: weibo.retweeted_status ? handleRetWeibo(weibo.retweeted_status) : ''
    })
}
