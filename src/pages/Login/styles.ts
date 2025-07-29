import styled from "styled-components";

export const Background = styled.div`
  background-image: url("/bg-login.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #fbfbfb;
  width: 616px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 42px;
  padding: 40px 0;
  filter: drop-shadow(0px 6px 10px rgba(177, 53, 22, 0.25));
`;

export const Logo = styled.img`
  width: 244px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 24px 0;

  label {
    font-size: 12px;
    color: #878787;
    padding-top: 8px;
  }
  input {
    padding: 4px 8px;
    border-radius: 8px;
    border: none;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.15));
    background-color: #fbfbfb;
    width: 352px;
    color: #0e0e0e;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  margin: 32px 0 16px;
`;

export const Slogan = styled.h2`
  font-size: 20px;
  margin-bottom: 24px;
`;
