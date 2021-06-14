import { CHANGE_FILTER } from "../actions/types";
import { filters } from "../../utils/enums";

const filterReducer = (state = filters.ALL, { type, payload }) => {

  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
}

export default filterReducer;