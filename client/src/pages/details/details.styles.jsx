import styled from "styled-components";

export const DetailsPageContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: auto 3fr;

  @media screen and (max-width: 800px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  padding: 0.5rem;
  height: 25rem;
  border: 1px solid;
  margin-right: 2rem;

  @media screen and (max-width: 800px) {
    margin-right: 0rem;
  }
`;

export const DetailContainer = styled.div`
  margin-left: 8rem;
  margin-top: -3rem;

  @media screen and (max-width: 800px) {
    margin-left: 0rem;
  }
`;

export const ItemDescription = styled.p`
  width: 100%;
  text-align: justify;
  font-size: 1.5rem;

  @media screen and (max-width: 800px) {
    margin-top: -3rem;
  }
`;

export const ItemName = styled.h4`
  font-size: 3rem;

  @media screen and (max-width: 800px) {
    margin-top: 4rem;
  }
`;

export const Price = styled.h4`
  font-size: 2rem;
  text-decoration: none;
`;
