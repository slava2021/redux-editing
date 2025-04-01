import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeServiceField, addService } from "../actions/actionCreators";

export const ServiceAdd = () => {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  console.log(item);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    console.log("name value: ", name, value);

    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addService(item.name, item.price));

    // dispatch(changeServiceField("name", ""));
    // dispatch(changeServiceField("price", ""));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" onChange={handleChange} value={item.name} />
      </label>
      <label>
        Price:
        <input name="price" onChange={handleChange} value={item.price} />
      </label>

      <button type="submit">Save</button>
    </form>
  );
};

export default ServiceAdd;
