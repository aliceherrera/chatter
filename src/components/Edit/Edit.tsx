import React from "react";
import ReactDOM from "react-dom";
import { BiEdit } from "react-icons/bi";

import * as S from "./styles";
import bgProfile from "../../assets/bg-profile.png";
import profile from "../../assets/profile.png";

import CancelButton from "../CancelButton";
import SaveButton from "../SaveButton";
type Props = {
  onClose: () => void;
};

const Edit = ({ onClose }: Props) => {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <S.Container>
      <S.Overlay />
      <S.EditContainer>
        <S.TopBar>
          <S.CloseButton type="button" onClick={onClose}>
            X
          </S.CloseButton>
          <S.Title>Editar informações</S.Title>
        </S.TopBar>
        <div>
          <S.Banner bg={bgProfile}>
            <S.EditButton
              type="button"
              onClick={() => console.log("trocar banner")}
            >
              <BiEdit />
            </S.EditButton>
          </S.Banner>
          <S.ProfileImage bg={profile}>
            <S.EditButton
              type="button"
              onClick={() => console.log("trocar foto de perfil")}
            >
              <BiEdit />
            </S.EditButton>
          </S.ProfileImage>
          <S.Form>
            <S.InputGroup>
              <input
                type="text"
                name="name"
                id="name"
                placeholder=" "
                required
              />
              <label htmlFor="name">Nome</label>
            </S.InputGroup>
            <S.InputGroup>
              <input
                type="text"
                name="username"
                id="username"
                placeholder=" "
                required
              />
              <label htmlFor="username">Nome de usuário</label>
            </S.InputGroup>
            <S.InputGroup>
              <input type="text" name="bio" id="bio" placeholder=" " />
              <label htmlFor="bio">Bio</label>
            </S.InputGroup>
            <S.InputGroup>
              <input
                type="password"
                name="senha"
                id="senha"
                placeholder=" "
                required
              />
              <label htmlFor="senha">Nova senha</label>
            </S.InputGroup>
            <S.InputGroup>
              <input
                type="password"
                name="repetirSenha"
                id="repetirSenha"
                placeholder=" "
                required
              />
              <label htmlFor="repetirSenha">Repetir senha</label>
            </S.InputGroup>
          </S.Form>
        </div>
        <S.Confirmation>
          <SaveButton>Salvar alterações</SaveButton>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
        </S.Confirmation>
      </S.EditContainer>
    </S.Container>,
    document.body
  );
};

export default Edit;
