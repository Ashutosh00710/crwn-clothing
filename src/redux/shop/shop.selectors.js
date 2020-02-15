import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollection = createSelector(
    [selectShop],
    shop => shop.collection
);

export const selectCollectionsForPreview = createSelector(
    [selectCollection],
    collections => Object.keys(collections).map(keys => collections[keys])
);

export const selectCollections = collectionUrlPrams => 
    createSelector(
        [selectCollection],
        collection => collection[collectionUrlPrams] 
    );