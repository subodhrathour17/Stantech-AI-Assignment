import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "../constants/index";

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });
  try {
    const response = await axios.get("https://reqres.in/api/users?page=1");
    dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
};
