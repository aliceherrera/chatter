import styled from "styled-components";

export const Container = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  padding: 40px 24px;
`;

export const Logo = styled.div`
  img {
    width: 100%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  gap: 24px;

  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
    color: #0f0f0f;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  a:hover {
    color: #b13516;
  }
`;

export const Bottom = styled.div`
  padding: 160px 0 0 40px;
`;
