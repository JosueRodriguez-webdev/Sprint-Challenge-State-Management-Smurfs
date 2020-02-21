//actions
import {
  POST_SMURFS,
  SUCCESS_POSTING_SMURFS,
  FAILED_POSTING_SMURFS,
  FETCHING_SMURFS,
  SUCCESS_FETCHING_SMURFS,
  FAILED_FETCHING_SMURFS
} from "../actions";

export let initialState = {
  smurfs: [],
  isPosting: false,
  isFetching: false,
  errors: ""
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SMURFS:
      return { ...state, isPosting: true };
    case SUCCESS_POSTING_SMURFS:
      return { ...state, smurfs: [...state, action.payload], isPosting: false };
    case FAILED_POSTING_SMURFS:
      return { ...state, isPosting: false, errors: action.payload };
    case FETCHING_SMURFS:
      return { ...state, isFetching: true };
    case SUCCESS_FETCHING_SMURFS:
      return { ...state, smurfs: action.payload, isFetching: false };
    case FAILED_FETCHING_SMURFS:
      return { ...state, isFetching: false, errors: action.payload };

    default:
      return state;
  }
};
