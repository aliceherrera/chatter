import * as enums from "../utils/enums/Category";

class Posts {
  id: number;
  username: string;
  fullname: string;
  avatar: string;
  text: string;
  when: string;
  likes: number;
  comments: number;
  favorite: enums.Favorite;
  follow: enums.Follow;

  constructor(
    id: number,
    username: string,
    fullname: string,
    avatar: string,
    text: string,
    when: string,
    likes: number,
    comments: number,
    favorite: enums.Favorite,
    follow: enums.Follow
  ) {
    this.id = id;
    this.username = username;
    this.fullname = fullname;
    this.avatar = avatar;
    this.text = text;
    this.when = when;
    this.likes = likes;
    this.comments = comments;
    this.favorite = favorite;
    this.follow = follow;
  }
}

export default Posts;
