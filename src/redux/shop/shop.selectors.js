import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollection = createSelector(
  [selectShop],
  (shop) => shop.collection
);

export const selectCollectionsForPreview = createSelector(
  [selectCollection],
  (collections) =>
    collections ? Object.keys(collections).map((keys) => collections[keys]) : []
);

export const selectCollections = (collectionUrlPrams) =>
  createSelector([selectCollection], (collection) =>
    collection ? collection[collectionUrlPrams] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collection
);
