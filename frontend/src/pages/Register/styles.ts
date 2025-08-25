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
  margin: 24px 0 0;
`;

export const InputGroup = styled.div`
  position: relative;
  width: 352px;
  margin-bottom: 24px;

  input {
    width: 352px;
    padding: 14px 12px;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: #fbfbfb;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.15));
    color: #0e0e0e;
  }

  input:focus {
    filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0))
      drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))
      drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.18));
  }

  label {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    color: #878787;
    pointer-events: none;
    transition: top 0.15s ease, transform 0.15s ease, font-size 0.15s ease,
      color 0.15s ease;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: -16px;
    transform: none;
    font-size: 12px;
    color: #0e0e0e;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 800;
  margin-top: 16px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  margin: 24px 0 8px;
`;

export const Note = styled.p`
  font-size: 12px;
  color: #878787;
  max-width: 352px;
  text-align: center;
  margin-bottom: 16px;
`;
