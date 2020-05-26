import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 90%;
  margin-top: 2rem;
  margin-left: 3.5rem;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid darkgrey;

  @media screen and (max-width: 800px) {
    margin-left: 1.1rem;
  }
`;

export const CopyrightSection = styled.div`
  font-size: 1.3rem;
  padding: 1rem;

  @media screen and (max-width: 800px) {
    font-size: 0.9rem;
    padding: 0;
  }
`;

export const SocialmediaSection = styled.div`
  padding: 1rem;
  display: flex;
`;

export const SocialmediaIcons = styled.div`
  width: 5rem;
`;
