import Sidebar from "../../components/Sidebar";
import PostCard from "../../components/PostCard";
import * as S from "./styles";
import Button from "../../components/Button";

const dummy = [
  {
    id: 1,
    author: "alice",
    text: "Bom dia, Chatter!",
    when: "2m",
    likes: 10,
    comments: 2,
  },
  {
    id: 2,
    author: "ciaopetit",
    text: "A floresta estava diminuindo, mas as árvores continuavam votando no machado, pois o machado era esperto e convenceu as árvores de que, por ter o cabo feito de madeira, era um deles ",
    when: "10m",
    likes: 2,
    comments: 0,
  },
  {
    id: 3,
    author: "alice",
    text: "Bom dia, Chatter!",
    when: "2m",
    likes: 10,
    comments: 2,
  },
  {
    id: 4,
    author: "ciaopetit",
    text: "A madeira que da forma ao machado também é vitima.",
    when: "10m",
    likes: 10,
    comments: 2,
  },
  {
    id: 1,
    author: "alice",
    text: "Bom dia, Chatter!",
    when: "2m",
    likes: 10,
    comments: 2,
  },
  {
    id: 2,
    author: "ciaopetit",
    text: "A floresta estava diminuindo, mas as árvores continuavam votando no machado, pois o machado era esperto e convenceu as árvores de que, por ter o cabo feito de madeira, era um deles ",
    when: "10m",
    likes: 2,
    comments: 0,
  },
  {
    id: 3,
    author: "alice",
    text: "Bom dia, Chatter!",
    when: "2m",
    likes: 10,
    comments: 2,
  },
  {
    id: 4,
    author: "ciaopetit",
    text: "A madeira que da forma ao machado também é vitima.",
    when: "10m",
    likes: 10,
    comments: 2,
  },
  {
    id: 1,
    author: "alice",
    text: "Bom dia, Chatter!",
    when: "2m",
    likes: 10,
    comments: 2,
  },
  {
    id: 2,
    author: "ciaopetit",
    text: "A floresta estava diminuindo, mas as árvores continuavam votando no machado, pois o machado era esperto e convenceu as árvores de que, por ter o cabo feito de madeira, era um deles ",
    when: "10m",
    likes: 2,
    comments: 0,
  },
  {
    id: 3,
    author: "alice",
    text: "Bom dia, Chatter!",
    when: "2m",
    likes: 10,
    comments: 2,
  },
  {
    id: 4,
    author: "ciaopetit",
    text: "A madeira que da forma ao machado também é vitima.",
    when: "10m",
    likes: 10,
    comments: 2,
  },
];

const Feed = () => {
  return (
    <S.Layout>
      <S.SideArea>
        <Sidebar />
      </S.SideArea>

      <S.MainArea>
        <S.Composer>
          <img src="/simbolo.png" alt="avatar" />
          <textarea placeholder="Qual o assunto?" />
          <Button>Falar</Button>
        </S.Composer>

        <S.Separator />

        <S.FeedList>
          {dummy.map((t) => (
            <PostCard
              key={t.id}
              author={t.author}
              text={t.text}
              when={t.when}
              likes={t.likes}
              comments={t.comments}
            />
          ))}
        </S.FeedList>
      </S.MainArea>
    </S.Layout>
  );
};

export default Feed;
