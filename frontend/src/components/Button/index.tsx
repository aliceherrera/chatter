import * as S from "./styles";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button = ({ children, ...rest }: Props) => {
  return <S.ButtonContainer {...rest}>{children}</S.ButtonContainer>;
};

export default Button;
