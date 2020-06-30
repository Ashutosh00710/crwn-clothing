import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";
import { showDetails } from "../../redux/details/details.actions";
import {
  CollectionItemContainer,
  BackgroundImage,
  FooterContainer,
  Name,
  Price,
  AddButton,
  DetailButton,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem, showDetails, history }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <FooterContainer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </FooterContainer>
      <DetailButton
        onClick={() => {
          showDetails(item);
          console.log(item);
          history.push("/details");
        }}
        inverted
      >
        {" "}
        DETAILS{" "}
      </DetailButton>
      <AddButton onClick={() => addItem(item)} inverted>
        {" "}
        ADD TO CART{" "}
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  showDetails: (item) => dispatch(showDetails(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
