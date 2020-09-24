import styled from "styled-components";

export const SelectContainer = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #2c3e50;
  background-image: none;

  &::after {
    content: "\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: #34495e;
    cursor: pointer;
    pointer-events: none;
    -webkit-transition: 0.25s all ease;
    -o-transition: 0.25s all ease;
    transition: 0.25s all ease;
  }
`;

export const Select = styled.select`
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #2c3e50;
  overflow: hidden;
  border-radius: 0.25em;
  font-family: inherit;
  font-size: 1rem;
  flex: 1;
  padding: 0 0.5em;
  color: #fff;
  cursor: pointer;
`;
