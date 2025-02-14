import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/tasks";

const initialState = {
  tasks: [],
  isLoading: false,
  filter: "all",
};

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addTaskAsync = createAsyncThunk("tasks/addTask", async (payload) => {
  const response = await axios.post(API_URL, payload);
  return response.data;
});

export const deleteTaskAsync = createAsyncThunk("tasks/deleteTask", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

export const toggleTaskStatusAsync = createAsyncThunk("tasks/toggleTaskStatus", async (id, { getState }) => {
  const task = getState().tasks.tasks.find((task) => task.id === id);
  if (task) {
    const updatedTask = { ...task, isCompleted: !task.isCompleted };
    await axios.put(`${API_URL}/${id}`, updatedTask);
    return updatedTask;
  }
});

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })
      .addCase(toggleTaskStatusAsync.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      });
  },
});

export const { setFilter } = taskSlice.actions;
export default taskSlice.reducer;
