import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionsId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
