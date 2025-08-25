import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

const SecondaryButton = ({ children }: Props) => {
  return <S.ButtonContainer>{children}</S.ButtonContainer>;
};

export default SecondaryButton;
