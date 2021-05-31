import { combineReducers } from "redux";
import templateReducer from "../pages/Home/Store/home.reducer";

const appReducer = combineReducers({
  template: templateReducer ,
});

function rootReducer(state = {template:[]}, action) {
  if (action.type === "RESET") {
    state = {
      ...state,
      template: undefined,
    };
  }
  return appReducer(state, action);
}

export default rootReducer;
