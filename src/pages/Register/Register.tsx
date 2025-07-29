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
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" placeholder="Nome" />
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" placeholder="E-mail" />
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" placeholder="Senha" />
            <label htmlFor="repetirSenha">Repetir Senha</label>
            <input
              type="password"
              name="repetirSenha"
              placeholder="Repetir senha"
            />
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
