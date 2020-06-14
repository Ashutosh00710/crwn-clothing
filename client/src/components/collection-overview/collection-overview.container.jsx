import { connect } from "react-redux";
import { compose } from "redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import { createStructuredSelector } from "reselect";
import CollectionOverview from "../collection-overview/collection-overview.component";
import withSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
