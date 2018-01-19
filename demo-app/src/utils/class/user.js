
export default class User {
  constructor({
    id,
    name, // 昵称
    gender, // 性别
    create_time, // 注册时间
    head_pic, // 头像
    pic_urls, // 背景图
    followers_count, // 粉丝数
    friends_count, // 关注数
    statuses_count, // 微博数
    verified_reason, // 认证原因
    location // 用户所在地
  }) {
    this.id = id
    this.name = name
    this.gender = gender
    this.create_time = create_time
    this.head_pic = head_pic
    this.pic_urls = pic_urls
    this.followers_count = followers_count
    this.friends_count = friends_count
    this.statuses_count = statuses_count
    this.verified_reason = verified_reason
    this.location = location
  }
}

export function handleUser(user) {
  return new User({
    id: user.id,
    name: user.screen_name,
    gender: user.gender,
    create_time: user.created_at,
    head_pic: user.avatar_large,
    pic_urls: user.cover_image_phone,
    followers_count:user.followers_count,
    friends_count:user.friends_count,
    statuses_count:user.statuses_count,
    verified_reason:user.verified_reason,
    location:user.location
  });
}
