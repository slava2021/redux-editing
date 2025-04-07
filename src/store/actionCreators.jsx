import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  CANCEL_SERVICE,
  SAVE_SERVICE,
  FILTER_SERVICE,
} from "./actionTypes";

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } };
}

export function editService(id, name, price) {
  return { type: EDIT_SERVICE, payload: { id, name, price } };
}

export function saveService(id, name, price) {
  return { type: SAVE_SERVICE, payload: { id, name, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function cancelService() {
  return { type: CANCEL_SERVICE };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function filterService(value) {
  return { type: FILTER_SERVICE, payload: { value } };
}
