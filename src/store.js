import reducer from "./reducer";
import middleware from "./middlewares";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore } from "redux";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export { store, persistor };
