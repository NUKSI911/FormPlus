import * as actionTypes from "./home.action";

const initialState = {
  templateData: [],
};

function templateReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TemplateConfig.InsertTemplateData: 
      return {
        ...state,
        templateData: action.payload,
      };
    
    default: 
      return state;
    
  }
}

export default templateReducer;
