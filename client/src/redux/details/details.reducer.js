import detailsActionTypes from "./details.types";

const INITIAL_STATE = {
  Item: {},
};

const detailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case detailsActionTypes.DETAILS_OF_ITEM:
      return {
        ...state,
        Item: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default detailsReducer;
