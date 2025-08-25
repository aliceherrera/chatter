import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.75;
`;

export const NewPostContainer = styled.div`
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

export const Composer = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr auto;
  gap: 12px;
  padding: 0 40px;
  align-items: center;
  width: 100%;

  img {
    width: 48px;
    height: 48px;
    border-radius: 999px;
    object-fit: cover;
    background: #f2f2f2;
  }

  textarea {
    border: none;
    border-radius: 8px;
    resize: none;
    outline: none;
    font-size: 1rem;
    padding: 8px;
    min-height: 48px;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
  }
`;
