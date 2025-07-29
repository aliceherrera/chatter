import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return <S.ButtonContainer>{children}</S.ButtonContainer>;
};

export default Button;
