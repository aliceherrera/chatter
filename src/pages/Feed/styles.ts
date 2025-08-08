import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr; /* sidebar | main */
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
  min-height: 100dvh;

  @media (max-width: 900px) {
    grid-template-columns: 1fr; /* esconde sidebar no mobile */
  }
`;

export const SideArea = styled.aside`
  position: sticky;
  top: 0;
  align-self: start;
  height: 100dvh;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MainArea = styled.main`
  overflow: hidden;
  background: #fff;
`;

export const Composer = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr auto;
  gap: 12px;
  padding: 16px;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
    border-radius: 999px;
    object-fit: cover;
    background: #f2f2f2;
  }

  textarea {
    border: none;
    resize: none;
    outline: none;
    font-size: 1rem;
    padding-top: 8px;
    min-height: 48px;
  }
`;

export const Separator = styled.hr`
  border: 0;
  border-top: 1px solid #f0f0f0;
  margin: 0;
`;

export const FeedList = styled.div`
  display: flex;
  flex-direction: column;
`;
