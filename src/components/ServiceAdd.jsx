import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeServiceField,
  addService,
  cancelService,
  saveService,
} from "../store/actionCreators";

export const ServiceAdd = () => {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleReset = () => {
    dispatch(cancelService());
    dispatch(changeServiceField("name", ""));
    dispatch(changeServiceField("price", ""));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (item.edit.status === false) {
      dispatch(addService(item.name, item.price));
    } else {
      dispatch(saveService(item.edit.id, item.name, item.price));
      dispatch(cancelService());
    }
    dispatch(changeServiceField("name", ""));
    dispatch(changeServiceField("price", ""));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={item.name}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={item.price}
        />
      </label>
      {item.edit.status === false ? (
        <input type="submit" value="Add" />
      ) : (
        <>
          <input type="submit" value="Save" />
          <input type="reset" onClick={handleReset} value="Cancel" />
        </>
      )}
    </form>
  );
};

export default ServiceAdd;
