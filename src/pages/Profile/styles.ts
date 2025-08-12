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

export const Separator = styled.hr`
  border: 0;
  border-top: 1px solid #f0f0f0;
  margin: 0;
`;

export const Banner = styled.div<{ bg: string }>`
  width: 100%;
  height: 314px;
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

export const Name = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

export const Username = styled.h2`
  font-size: 24px;
  color: #4b4b4b;
`;

export const Bio = styled.p`
  font-size: 24px;
  margin-top: 24px;
`;

export const User = styled.div`
  margin-left: 184px;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const Numbers = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  color: #b03415;
  font-size: 20px;
`;
