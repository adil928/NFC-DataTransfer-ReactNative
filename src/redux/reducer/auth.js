import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../constants';

const initialState = {
  registerSuccess: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return Object.assign({}, action.payload);
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case LOGIN_USER_FAILURE:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}
