import {CHANGE_FILTER, filters} from "../actions/types";

const filterReducer = (state = filters.ALL, { type, payload }) => {

  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
}

export default filterReducer;