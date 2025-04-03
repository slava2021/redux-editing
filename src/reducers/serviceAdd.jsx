import {
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  CANCEL_SERVICE,
} from "../actions/actionTypes";

const initialState = {
  name: "",
  price: "",
  edit: {
    status: false,
    id: 0,
  },
};

export default function serviceAddReducer(state = initialState, action) {
  if (!action) return state;

  switch (action.type) {
    case CHANGE_SERVICE_FIELD: {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }
    case EDIT_SERVICE: {
      const { id, name, price } = action.payload;
      return { name, price, edit: { status: true, id } };
    }
    case CANCEL_SERVICE: {
      return initialState;
    }
    default:
      return state;
  }
}
