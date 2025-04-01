import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeService } from "../actions/actionCreators";

export const ServiceList = () => {
  const items = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  return (
    <ul>
      {items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleRemove(o.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};
