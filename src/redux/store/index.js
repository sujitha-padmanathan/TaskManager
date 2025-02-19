import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../reducer/taskReducer";

const Store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
});

export default Store;
