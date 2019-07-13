import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import globalReducer from "./Global/GlobalReducer";
import lookbookReducer from "./Lookbook/LookbookReducer";

const reducers: Reducer<IRootState> = combineReducers({
  global: globalReducer,
  lookbook: lookbookReducer,
});

const rootStore = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export {
  rootStore,
};
