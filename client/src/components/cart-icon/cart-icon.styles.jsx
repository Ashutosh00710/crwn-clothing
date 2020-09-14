import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 30px;
    height: 30px;
  }
`;

export const ShopIcon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;

  @media screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;

  @media screen and (max-width: 800px) {
    bottom: 6px;
  }
`;
