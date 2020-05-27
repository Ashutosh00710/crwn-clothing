import styled from "styled-components";

export const ContactPageContainer = styled.div`
  width: 90%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto 0;

  @media screen and (max-width: 800px) {
    margin: 10px auto 0;
  }
`;

export const ContactUs = styled.div`
  width: 100%;
  padding: 10px 0;
  font-size: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`;

export const Heading = styled.div`
  font-size: 3rem;
  padding: 30px 0;

  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

export const HeadofficeSection = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    padding: 0;
  }
`;

export const HeadImageContainer = styled.div`
  width: 160rem;
  padding: 25px;
  @media screen and (max-width: 800px) {
    padding: 3px;
    width: 8rem;
    margin-left: 5.5rem;
  }
`;

export const HeadTextContainer = styled.div`
  font-size: 1.7rem;
  padding: 45px;
  @media screen and (max-width: 800px) {
    padding: 15px;
    font-size: 0.9rem;
  }
`;
