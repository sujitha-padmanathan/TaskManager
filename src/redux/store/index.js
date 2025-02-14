import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import taskSlice from "../reducer/taskReducer";

const Store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
});

export default Store;
