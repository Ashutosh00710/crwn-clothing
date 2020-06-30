import styled from "styled-components";

export const DetailsPageContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: auto 3fr;
`;

export const ImageContainer = styled.div`
  padding: 0.5rem;
  height: 25rem;
  width: auto;
  border: 1px solid;
  margin-right: 2rem;
`;

export const DetailContainer = styled.div`
  margin-left: 8rem;
  margin-top: -3rem;
`;

export const ItemDescription = styled.p`
  width: 100%;
  text-align: justify;
  font-size: 1.5rem;
`;

export const ItemName = styled.h4`
  font-size: 3rem;
`;

export const Price = styled.h4`
  font-size: 2rem;
  text-decoration: none;
`;
