import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  token: null,
  userType: null,
  name: null,
  gender: null,
  age: null,
  email: null,
  id: null,
  phoneNumber: null,
  bio: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        isAuthenticated: true,
        token: action.payload.token,
        userType: action.payload.user.user_type,
        name: action.payload.user.fullname,
        gender: action.payload.user.gender,
        age: action.payload.user.age,
        email: action.payload.user.email,
        id: action.payload.user.id,
        phoneNumber: action.payload.user.phone_number,
        bio: action.payload.user.bio,
      };
    default:
      return state;
  }
};

export default auth;
