import {
  BITCOINCASH_URL_RESULT,
} from '../constants';

const initialState = {
  bitcoincashURL: '',
};

export default function bitcoincash(state = initialState, action) {
  switch (action.type) {
    case BITCOINCASH_URL_RESULT:
      return {
        ...state,
        bitcoincashURL: action.payload,
      };
    default:
      return state;
  }
}
