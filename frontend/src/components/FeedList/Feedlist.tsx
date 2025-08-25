import * as S from "./styles";
import PostCard from "../../components/PostCard";
import * as enums from "../../utils/enums/Category";

const FeedList = () => {
  const dummy = [
    {
      id: 1,
      username: "milonga",
      fullname: "Alice Herrera",
      avatar: "person1.jpg",
      text: "Bom dia, Chatter!",
      when: "2m",
      likes: 10,
      comments: 2,
      favorite: enums.Favorite.LIKED,
      follow: enums.Follow.FOLLOWING,
    },
    {
      id: 2,
      username: "ciaopetit",
      fullname: "Paulo Silva",
      avatar: "person2.jpg",
      text: "A floresta estava diminuindo, mas as árvores continuavam votando no machado, pois o machado era esperto e convenceu as árvores de que, por ter o cabo feito de madeira, era um deles ",
      when: "5m",
      likes: 2,
      comments: 0,
      favorite: enums.Favorite.LIKED,
      follow: enums.Follow.FOLLOWING,
    },
    {
      id: 3,
      username: "ciaopetit",
      fullname: "Paulo Silva",
      avatar: "person2.jpg",
      text: "A madeira que da forma ao machado também é vitima.",
      when: "1h",
      likes: 32,
      comments: 6,
      favorite: enums.Favorite.LIKED,
      follow: enums.Follow.FOLLOWING,
    },
  ];
  return (
    <S.Feed>
      {dummy.map((t) => (
        <PostCard
          key={t.id}
          username={t.username}
          fullname={t.fullname}
          avatar={t.avatar}
          text={t.text}
          when={t.when}
          likes={t.likes}
          comments={t.comments}
          favorite={t.favorite}
          follow={t.follow}
        />
      ))}
    </S.Feed>
  );
};

export default FeedList;
