import axios from "axios";

// variables for .Post
export const POST_SMURFS = "POST_SMURFS";
export const SUCCESS_POSTING_SMURFS = "SUCCESS_POSTING_SMURFS";
export const FAILED_POSTING_SMURFS = "FAILED_POSTING_SMURFS";

// variables for .Get
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SUCCESS_FETCHING_SMURFS = "SUCCESS_FETCHING_SMURFS";
export const FAILED_FETCHING_SMURFS = "FAILED_FETCHING_SMURFS";

export const postSmurfs = (smurfs) => {
  return (dispatch) => {
    dispatch({ type: POST_SMURFS });
    axios
      .post(`http://localhost:3333/smurfs`, smurfs)
      .then((res) => {
        console.log(res);
        dispatch({ type: SUCCESS_POSTING_SMURFS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FAILED_POSTING_SMURFS, payload: err });
      });
  };
};

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_SMURFS });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then((res) => {
        dispatch({ type: SUCCESS_FETCHING_SMURFS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FAILED_FETCHING_SMURFS, payload: err });
      });
  };
};
