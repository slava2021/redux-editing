import { nanoid } from "nanoid";
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  SAVE_SERVICE,
} from "../actions/actionTypes";

const initialState = [
  { id: nanoid(), name: "Замена стекла", price: 21000 },
  { id: nanoid(), name: "Замена дисплея", price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price: Number(price) }];
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
      return [...state];

    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter((service) => service.id != id);
    default:
      return state;
  }
}
