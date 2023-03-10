import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  token: null,
  username: null,
  email: null,
  id: null,
  group_number: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        isAuthenticated: true,
        token: action.payload.token,
        username: action.payload.user.username,
        email: action.payload.user.email,
        id: action.payload.user.id,
        group_number: action.payload.user.group_number,
      };
    default:
      return state;
  }
};

export default auth;
