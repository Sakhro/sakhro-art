import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const reducers = combineReducers({
  router: connectRouter(history),
});

export const rootStore = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history))),
);