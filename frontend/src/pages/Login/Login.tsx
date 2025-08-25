import * as S from "./styles";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import SecondaryButton from "../../components/SecondaryButton";

const Login = () => {
  return (
    <S.Background>
      <S.Container>
        <S.Logo src={logo} alt="Logo Chatter"></S.Logo>
        <S.Slogan>Onde todo mundo tem algo a dizer</S.Slogan>
        <S.Title>Seja bem vindo!</S.Title>
        <div>
          <S.Form>
            <S.InputGroup>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                required
              />
              <label htmlFor="email">E-mail</label>
            </S.InputGroup>
            <S.InputGroup>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder=" "
                required
              />
              <label htmlFor="senha">Senha</label>
            </S.InputGroup>
          </S.Form>
        </div>
        <Button>Entrar</Button>
        <S.SubTitle>Ainda nao tem uma conta?</S.SubTitle>
        <SecondaryButton>Criar nova conta</SecondaryButton>
      </S.Container>
    </S.Background>
  );
};

export default Login;
