import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";
import CustomButton from "../../components/coustom-button/coustom-button.component";
import {
  DetailsPageContainer,
  ImageContainer,
  DetailContainer,
  ItemName,
  ItemDescription,
  Price,
} from "./details.styles";

const DetailsPage = ({ details, addItem }) => {
  const { name, imageUrl, price } = details;
  return (
    <DetailsPageContainer>
      <ImageContainer>
        <img src={imageUrl} alt="Item" height="384" width="100%" />
      </ImageContainer>
      <DetailContainer>
        <ItemName>{name}</ItemName>
        <ItemDescription>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </ItemDescription>
        <Price>Price: ${price}</Price>
        <CustomButton onClick={() => addItem(details)}>
          ADD TO CART
        </CustomButton>
      </DetailContainer>
    </DetailsPageContainer>
  );
};

const mapStateToProps = (state) => ({
  details: state.details.Item,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
