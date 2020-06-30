import detailsActionTypes from "./details.types";

export const showDetails = (item) => ({
  type: detailsActionTypes.DETAILS_OF_ITEM,
  payload: item,
});
