import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 15rem;
  padding: 25px;

  @media screen and (max-width: 800px) {
    padding: 0px;
    width: 10rem;
    margin-top: 0.5rem;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
