import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollection } from "../../redux/shop/shop.actions";
import withSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollection(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionsId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionsMap) =>
    dispatch(updateCollection(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
