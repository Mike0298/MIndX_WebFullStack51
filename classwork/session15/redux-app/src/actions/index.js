import jsonPlaceHolder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceHolder("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: res.data,
  });
};
