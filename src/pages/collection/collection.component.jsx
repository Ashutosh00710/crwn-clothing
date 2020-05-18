import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollections } from "../../redux/shop/shop.selectors";

import { CollectionPageContainer, Title, Items } from "./collection.styles";

const CollectionPage = ({ collections }) => {
  const { title, items } = collections;
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollections(ownProps.match.params.collectionsId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
