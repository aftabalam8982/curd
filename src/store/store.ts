import { configureStore } from "@reduxjs/toolkit";
// import  formReducer  from "./formSlice";
import  { formReducer } from "../slice/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
