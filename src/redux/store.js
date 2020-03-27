import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [];

//v.147
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

//V.127 we need to export
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//V.127
export const persistor = persistStore(store);

export default { store, persistor };
