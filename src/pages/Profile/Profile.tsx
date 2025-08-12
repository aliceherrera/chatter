import * as S from "./styles";
// import Button from "../../components/Button";
import FeedList from "../../components/FeedList/Feedlist";
import Sidebar from "../../components/Sidebar";
import bgProfile from "../../assets/bg-profile.png";
import profile from "../../assets/profile.png";
import Button from "../../components/Button";

const Profile = () => {
  return (
    <S.Layout>
      <S.SideArea>
        <Sidebar />
      </S.SideArea>

      <S.MainArea>
        <S.Banner bg={bgProfile} />
        <S.ProfileImage bg={profile} />
        <S.User>
          <div>
            <S.Name>Paulo Silva</S.Name>
            <S.Username>@ciaopetit</S.Username>
          </div>
          <div>
            <Button>Editar perfil</Button>
          </div>
        </S.User>
        <S.Bio>O cara da madeira.</S.Bio>
        <S.Numbers>
          <p>publicações 25</p>
          <p>seguidores 123</p>
          <p>seguindo 321</p>
        </S.Numbers>
        <S.Separator />
        <FeedList />
      </S.MainArea>
    </S.Layout>
  );
};

export default Profile;
