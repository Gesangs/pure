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

function handleContent(text) {
    // text = text.replace(/\u200B/g,'')
    //            .replace(/(@[^:]+):/g,'<user>$1</user>:')
    //            .replace(/\[([^\[\]]+)\]/g, '<icon>$1</icon>')
    //            .replace(/#([^#]+)#/g, '<topic>$1</topic>')
    //            .replace(/全文:.+/g, '<all>查看全文</all>');
    //            const pattern = /([^>]*)(<([a-z/][-a-z0-9_:.]*)[^>/]*(\/*)>)([^<]*)/g,
    //            nodes = [];
    //            let matchArr;
          
    //        while ((matchArr = pattern.exec(text))) {
    //           switch(matchArr[3]) {
    //               case 'user':
    //                   nodes.push({user: matchArr[5]});break;
    //               case 'all':
    //                   nodes.push({all: matchArr[5]});break;
    //               case 'topic':
    //                   nodes.push({topic: matchArr[5]});break;
    //               case 'icon':
    //                   nodes.push({icon: matchArr[5]});break;
    //               default:
    //                   nodes.push({text: matchArr[5]});break;
    //             }
    //           }
    // return nodes
    return text.replace(/\u200B/g,'')
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
        pic_urls: weibo.pic_urls,
        favorited: weibo.favorited,
        reposts_count: weibo.reposts_count,
        comments_count: weibo.comments_count,
        attitudes_count: weibo.attitudes_count,
        retweeted_status: weibo.retweeted_status ? handleRetWeibo(weibo.retweeted_status) : ''
    })
}
