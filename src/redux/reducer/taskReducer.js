import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
  isLoading: false,
  filter: "all",
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    saveTasks: (state, actions) => {
      return { ...state, tasks: actions.payload };
    },
    addTask: (state, { payload: title }) => {
      return {
        ...state,
        tasks: [{ id: uuid(), title, isCompleted: false }, ...state.tasks],
      };
    },
    toggleLoader: (state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    },
    deleteTask: (state, { payload: id }) => {
      const prevTask = [...state.tasks];
      const index = prevTask.findIndex((item) => item.id === id);
      if (index !== -1) prevTask.splice(index, 1);
      state.tasks = prevTask;
    },
    toggleTaskStatus: (state, { payload: id }) => {
      const index = state.tasks.findIndex((item) => item.id === id);
      if (index !== -1)
        state.tasks[index].isCompleted = !state.tasks[index].isCompleted;
    },
    setFilter: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
});

export const {
  saveTasks,
  addTask,
  toggleLoader,
  deleteTask,
  toggleTaskStatus,
  setFilter,
} = taskSlice.actions;

export default taskSlice.reducer;
