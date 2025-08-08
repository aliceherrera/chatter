import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../Button";
import * as S from "./styles";
import {
  BiSearchAlt,
  BiSolidHeart,
  BiSolidHomeSmile,
  BiSolidUser,
} from "react-icons/bi";

const Sidebar = () => {
  return (
    <S.Container>
      <S.Logo>
        <img src={logo} alt="Logo Chatter" />
      </S.Logo>

      <S.Nav>
        <NavLink to="/feed">
          <BiSolidHomeSmile />
          Home
        </NavLink>
        <NavLink to="/feed">
          <BiSolidUser />
          Perfil
        </NavLink>
        <NavLink to="/feed">
          <BiSearchAlt />
          Buscar
        </NavLink>
        <NavLink to="/feed">
          <BiSolidHeart />
          Favoritos
        </NavLink>
      </S.Nav>

      <S.Bottom>
        <Button>Falar</Button>
      </S.Bottom>
    </S.Container>
  );
};

export default Sidebar;
