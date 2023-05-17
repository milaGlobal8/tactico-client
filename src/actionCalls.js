import axios from "axios";

export const loginCall = async (user, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await axios.post("auth/login", user);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "LOGIN_ERROR", payload: err });
  }
};

export const logoutCall = async (user, dispatch) => {
  dispatch({ type: "LOGOUT_START" });
  try {
    const response = await axios.post("auth/logout", user);
    dispatch({ type: "LOGOUT_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "LOGOUT_ERROR", payload: err });
  }
};

export const updateCall = async (data, dispatch) => {
  dispatch({ type: "UPDATE_START" });
  try {
    dispatch({ type: "UPDATE_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "UPDATE_ERROR", payload: err });
  }
};
