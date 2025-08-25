import * as S from "./styles";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import SecondaryButton from "../../components/SecondaryButton";

const Register = () => {
  return (
    <S.Background>
      <S.Container>
        <S.Logo src={logo} alt="Logo Chatter"></S.Logo>
        <S.Title>Cadastro</S.Title>
        <div>
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
                type="email"
                name="email"
                id="email"
                placeholder=" "
                required
              />
              <label htmlFor="email">E-mail</label>
            </S.InputGroup>
            <S.InputGroup>
              <input
                type="password"
                name="senha"
                id="senha"
                placeholder=" "
                required
              />
              <label htmlFor="senha">Senha</label>
            </S.InputGroup>
            <S.InputGroup>
              <input
                type="password"
                name="repetirSenha"
                id="repetirSenha"
                placeholder=" "
                required
              />
              <label htmlFor="repetirSenha">Repetir Senha</label>
            </S.InputGroup>
          </S.Form>
        </div>
        <S.Note>
          Ao se inscrever, você concorda com os Termos de Serviço e a Política
          de Privacidade, incluindo o Uso de Cookies.
        </S.Note>
        <Button>Criar nova conta</Button>
        <S.SubTitle>Ja tem uma conta?</S.SubTitle>
        <SecondaryButton>Voltar para o login</SecondaryButton>
      </S.Container>
    </S.Background>
  );
};

export default Register;
