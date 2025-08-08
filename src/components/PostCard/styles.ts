import styled from "styled-components";

export const Card = styled.article`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;

  &:hover {
    background: #fafafa;
  }
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 999px;
  background: #eaeaea;
`;

export const Content = styled.div`
  p {
    margin: 6px 0 0;
    line-height: 1.4;
  }
`;

export const Header = styled.header`
  display: flex;
  gap: 6px;
  align-items: baseline;

  strong {
    font-size: 0.95rem;
  }
  span {
    color: #4b4b4b;
    font-size: 0.9rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  gap: 20px;
  color: #4b4b4b;

  p {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  strong {
    font-size: 0.95rem;
  }
  span {
    color: #4b4b4b;
    font-size: 0.9rem;
  }
`;
