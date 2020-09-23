import styled from "styled-components";

export const RetailFormContainer = styled.div`
  padding: 0rem 4rem;
  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

export const DescriptionVideoContainer = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    display: grid;
  }
`;

export const DescriptionContainer = styled.div`
  padding: 4rem;
  @media screen and (max-width: 800px) {
    padding: 1rem;
  }
`;

export const VideoContainer = styled.video`
  width: 50%;
  border-radius: 2rem;
  margin-right: 5rem;
  @media screen and (max-width: 800px) {
    border-radius: 1rem;
    margin-right: 0rem;
    width: 100%;
  }
`;
