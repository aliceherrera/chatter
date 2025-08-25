import Sidebar from "../../components/Sidebar";
import * as S from "./styles";
import Button from "../../components/Button";
import FeedList from "../../components/FeedList/Feedlist";

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

        <FeedList />
      </S.MainArea>
    </S.Layout>
  );
};

export default Feed;
