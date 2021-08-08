import { DEFAULT_Action } from "../actions/types";

const initialState = {};

export default function BasicReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_Action:
      return state;

    default:
      return state;
  }
}
