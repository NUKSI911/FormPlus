import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../store/rootReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "primary",
  storage,
  whitelist:['template'],
  stateReconciler:autoMergeLevel2

};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function configureStore() {
  let store = createStore(
    persistedReducer,{},
    composeWithDevTools(applyMiddleware(thunk))
  );

  let persistor = persistStore(store);
  return { store, persistor };
}
