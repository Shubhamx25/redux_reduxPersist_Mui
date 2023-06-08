import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";



const persistConfig = {
    key: 'root',
    storage: storage    
}

const persistedReducer = persistReducer(persistConfig, countReducer);

const store = configureStore({
    reducer: {
        counter: persistedReducer
    },
});

const persistor = persistStore(store);

export {store, persistor};