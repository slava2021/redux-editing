import { nanoid } from "nanoid";
import {
  ADD_SERVICE,
  FILTER_SERVICE,
  REMOVE_SERVICE,
  SAVE_SERVICE,
} from "../actions/actionTypes";

const initialState = [
  { id: nanoid(), name: "Замена стекла", price: 21000 },
  { id: nanoid(), name: "Замена дисплея", price: 25000 },
];

let stateStore = initialState;

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      stateStore = [...state, { id: nanoid(), name, price: Number(price) }];
      return stateStore;

    case SAVE_SERVICE:
      {
        const { id, name, price } = action.payload;
        state.map(
          (item) => (
            item.id === id && (item.name = name),
            item.id === id && (item.price = price)
          )
        );
      }
      stateStore = [...state];
      return stateStore;

    case REMOVE_SERVICE:
      const { id } = action.payload;
      stateStore = state.filter((service) => service.id != id);
      return stateStore;

    case FILTER_SERVICE: {
      const { value } = action.payload;
      // console.log(value.length);
      if (value.length === 0) {
        return stateStore;
      } else {
        return state.filter((service) =>
          service.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        );
      }
    }
    default:
      return state;
  }
}
