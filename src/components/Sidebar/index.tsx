import { NavLink } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/logo.png";
import * as S from "./styles";
import {
  // BiSearchAlt,
  // BiSolidHeart,
  BiSolidHomeSmile,
  BiSolidUser,
} from "react-icons/bi";

import Button from "../Button";
import NewPost from "../NewPost/NewPost";

const Sidebar = () => {
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);

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
        <NavLink to="/profile/:username">
          <BiSolidUser />
          Perfil
        </NavLink>
        {/* <NavLink to="/feed">
          <BiSearchAlt />
          Buscar
        </NavLink>
        <NavLink to="/feed">
          <BiSolidHeart />
          Favoritos
        </NavLink> */}
      </S.Nav>

      <S.Bottom>
        <Button onClick={() => setIsNewPostOpen(true)}>Falar</Button>
        {isNewPostOpen && <NewPost onClose={() => setIsNewPostOpen(false)} />}
      </S.Bottom>
    </S.Container>
  );
};

export default Sidebar;
