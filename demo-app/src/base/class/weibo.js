export default class Weibo {
    constructor({
        name,
        time,
        head_pic,
        source,
        content,
        reposts_count,
        comments_count,
        attitudes_count
    }) {
        this.name = name
        this.time = time
        this.head_pic = head_pic
        this.source = source
        this.content = content
        this.reposts_count = reposts_count
        this.comments_count = comments_count
        this.attitudes_count = attitudes_count
    }
}

export function handleWeibo(weibo) {
    return new Weibo({
        name: weibo.user.screen_name,
        time: weibo.created_at,
        head_pic: weibo.user.profile_image_url,
        source: weibo.source,
        content: weibo.text,
        reposts_count: weibo.reposts_count,
        comments_count: weibo.comments_count,
        attitudes_count: weibo.attitudes_count
    })
}