import * as S from "./styles";
import { BiCommentDetail, BiHeart } from "react-icons/bi";
import * as enums from "../../utils/enums/Category";

type Props = {
  username: string;
  fullname: string;
  avatar: string;
  text: string;
  when: string;
  likes: number;
  comments: number;
  favorite: enums.Favorite;
  follow: enums.Follow;
};

const PostCard = ({
  username,
  fullname,
  avatar,
  text,
  when,
  likes,
  comments,
}: Props) => {
  return (
    <S.Card>
      <S.Avatar src={avatar} alt={"avatar de " + username} />
      <S.Content>
        <S.Header>
          <strong>@{username}</strong>
          <p>{fullname}</p>
          <span>· {when}</span>
        </S.Header>
        <p>{text}</p>
        <S.Footer>
          <p>
            <BiHeart /> {likes}
          </p>
          <p>
            <BiCommentDetail /> {comments}
          </p>
        </S.Footer>
      </S.Content>
    </S.Card>
  );
};

export default PostCard;
