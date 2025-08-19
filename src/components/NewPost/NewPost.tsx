import React from "react";
import * as S from "./styles";
import Button from "../Button";

type Props = {
  onClose: () => void;
};

const NewPost = ({ onClose }: Props) => {
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

  return (
    <S.Container>
      <S.Overlay />
      <S.NewPostContainer>
        <S.TopBar>
          <S.CloseButton type="button" onClick={onClose}>
            X
          </S.CloseButton>
          <S.Title>Novo post</S.Title>
        </S.TopBar>

        <S.Composer>
          <img src="/simbolo.png" alt="avatar" />
          <textarea placeholder="Qual o assunto?" />
          <Button>Falar</Button>
        </S.Composer>
      </S.NewPostContainer>
    </S.Container>
  );
};

export default NewPost;
