import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeService, editService } from "../actions/actionCreators";

export const ServiceList = () => {
  const items = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();
  const handleEdit = (id, name, price) => {
    dispatch(editService(id, name, price));
  };
  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  return (
    <ul>
      {items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <input
            type="button"
            onClick={() => handleEdit(o.id, o.name, o.price)}
            value="Edit"
          />
          <input
            type="button"
            onClick={() => handleRemove(o.id)}
            value="Delete"
          />
        </li>
      ))}
    </ul>
  );
};
