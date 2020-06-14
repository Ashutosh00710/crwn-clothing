import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    width: 300px;
  }
`;

export const SignUpButton = styled.div`
  display: grid;
  justify-content: center;
`;

export const Title = styled.h2`
  margin: 10px 0;
`;
