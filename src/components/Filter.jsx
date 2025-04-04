import React from "react";
import { useDispatch } from "react-redux";
import { filterService } from "../actions/actionCreators";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch(filterService(value));
  };

  return (
    <label>
      Search:
      <input type="text" name="name" onChange={handleChange} />
    </label>
  );
};

export default Filter;
