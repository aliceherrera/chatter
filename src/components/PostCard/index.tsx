import * as S from "./styles";
import { BiCommentDetail, BiHeart } from "react-icons/bi";

type Props = {
  author: string;
  text: string;
  when: string;
  likes: number;
  comments: number;
};

const PostCard = ({ author, text, when, likes, comments }: Props) => {
  return (
    <S.Card>
      <S.Avatar />
      <S.Content>
        <S.Header>
          <strong>@{author}</strong>
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
