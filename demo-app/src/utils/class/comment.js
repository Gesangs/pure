import {handleUser} from "./user"
import { handleContent } from "./weibo"
import { format } from "../date-utils";
export default class Comment {
  constructor({
    id,
    user,
    create_time, // 注册时间
    source, // 来自
    content,
    number
  }) {
    this.id = id
    this.user = user
    this.source = source
    this.create_time = create_time
    this.content = content
    this.number = number
  }
}

export function handleComment(comment) {
  return new Comment({
    id: comment.id,
    user: handleUser(comment.user),
    source: comment.source.replace(/<[^>]+>/g, ""),
    create_time: format(comment.created_at),
    content: handleContent(comment.text),
    number: comment.floor_number,
  });
}

export function handleCommentList(comments) {
    comments = comments || [];
    const List = [];
    comments.forEach((item, index) => {
      const comment = handleComment(item);
      List.push(comment);
    });
    return List;
  }