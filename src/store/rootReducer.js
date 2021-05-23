import { combineReducers } from "redux";
import templateReducer from "../pages/Template/Store/template.reducer";

const appReducer = combineReducers({
  template: templateReducer,
});

function rootReducer(state = {}, action) {
  if (action.type === "RESET") {
    state = {
      ...state,
      template: undefined,
    };
  }
  return appReducer(state, action);
}

export default rootReducer;
