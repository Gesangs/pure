import Moment from '../moment.js'
import {shortToLong} from '../../api/weibo'
import {access_token} from '../../config'

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
        short_urls,
        pic_urls,
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
        this.short_urls = short_urls
        this.pic_urls = pic_urls
        this.favorited = favorited
        this.reposts_count = reposts_count
        this.comments_count = comments_count
        this.attitudes_count = attitudes_count
        this.retweeted_status = retweeted_status
    }
}

function handleRetWeibo(weibo) {
    return new Weibo({
        id: weibo.id,
        content: handleContent(weibo.text),
        pic_urls: weibo.pic_urls,
        name: `@${weibo.user.screen_name}`,
        reposts_count: `转发${weibo.reposts_count}`,
        comments_count: `评论${weibo.comments_count}`,
        attitudes_count: `点赞${weibo.attitudes_count}`
    })
}
// .replace(/\/\/(@[^:：]+)(:|：)/g,'//<user>$1</user>:')
// .replace(/(@[\u4e00-\u9fa5a-zA-Z0-9_-]){4,30}/g,'<user>$1</user>')
// .replace(/\u200B/g,'')
// .match(/(http:\/\/t.cn\/\w+)/g)[0]
function handleContent(text) {
    // const audioUrl = handleUrl(text.match(/(http:\/\/t.cn\/\w+)/g))
    text = text.replace(/(@[^\s|\/|:|：|@]+)/g, '<user>$1</user>')
               .replace(/\[([^\[\]]+)\]/g, '<icon>[$1]</icon>')
               .replace(/(#[^#]+#)/g, '<topic>$1</topic>')
               .replace(/...全文.+/g, '...<all>查看全文</all>')
               .replace(/(http:\/\/t.cn\/\w+)/g, '<url>$1</url> ')
               .replace(/\u200B/g,'');
    if(text == text) text = `${text}<p></p>`
    return text;
}
export function handleWeibo(weibo) {
    return new Weibo({
        id: weibo.id,
        mid: weibo.mid,
        name: weibo.user.screen_name,
        time: Moment(weibo.created_at).fromNow(),
        head_pic: weibo.user.profile_image_url,
        source: (weibo.source).replace(/<[^>]+>/g, ""),
        content: handleContent(weibo.text),
        short_urls: weibo.text.match(/(http:\/\/t.cn\/\w+)/g),
        pic_urls: weibo.pic_urls,
        favorited: weibo.favorited,
        reposts_count: weibo.reposts_count,
        comments_count: weibo.comments_count,
        attitudes_count: weibo.attitudes_count,
        retweeted_status: weibo.retweeted_status ? handleRetWeibo(weibo.retweeted_status) : ''
    })
}
