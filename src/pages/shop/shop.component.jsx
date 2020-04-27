import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

//import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
//import CollectionPage from "../collection/collection.component";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import {
  selectCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import Spinner from "../../components/spinner/spinner.component";

const CollectionsOverview = lazy(() =>
  import("../../components/collections-overview/collections-overview.component")
);

const CollectionPage = lazy(() => import("../collection/collection.component"));

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

export const ShopPage = ({
  fetchCollectionsStart,
  match,
  isCollectionFetching,
  isCollectionsLoaded,
}) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </Suspense>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
