import { CHANGE_SERVICE_FIELD } from "../actions/actionTypes";

const initialState = { name: "ddd", price: "111" };

export default function serviceAddReducer(state = initialState, action) {
  if (!action) return state;

  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    default:
      return state;
  }
}
