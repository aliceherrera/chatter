import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.75;
  z-index: 10;
`;

export const EditContainer = styled.div`
  position: relative;
  background-color: #fbfbfb;
  margin: 24px auto;
  width: 616px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 42px;
  padding: 40px 0;
  filter: drop-shadow(0px 6px 10px rgba(177, 53, 22, 0.25));
  z-index: 30;
`;

export const Logo = styled.img`
  width: 244px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 80px 0 0;
`;

export const InputGroup = styled.div`
  position: relative;
  width: 536px;
  margin-bottom: 24px;

  input {
    width: 100%;
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

export const TopBar = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 0 40px 24px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
  margin: auto;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  color: #c82121;
  padding: 4px 8px;
  border-radius: 8px;
  border: solid 1px #c82121;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
`;

export const Banner = styled.div<{ bg: string }>`
  width: 100%;
  height: 240px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #ddd;
  position: relative;
`;

export const ProfileImage = styled.div<{ bg: string }>`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 234px;
`;

export const Confirmation = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  padding: 24px 40px 0;
`;

export const EditButton = styled.button`
  position: absolute;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  display: inline-flex;
  align-items: center;
  padding: 12px 12px;
  border-radius: 50px;
  border: none;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  backdrop-filter: blur(2px);
  transition: transform 0.15s ease;
`;
