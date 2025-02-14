import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { saveTasks, toggleLoader } from "../../redux/reducer/taskReducer";
import Header from "../../components/TaskManager/Header";
import { v4 as uuid } from "uuid";
import TaskList from "../../components/TaskManager/TaskList";

const TaskManager = () => {
  const dispatch = useDispatch();

  const toggleTaskLoader = () => {
    dispatch(toggleLoader());
  };

  const saveInitialTasks = (payload) => {
    dispatch(saveTasks(payload));
  };

  const fetchInitialTasks = () => {
    toggleTaskLoader();
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((responseData) => {
        const data = responseData.map(({ title }) => ({
          id: uuid(),
          title,
          isCompleted: false,
        }));
        saveInitialTasks(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        toggleTaskLoader();
      });
  };

  useEffect(() => {
    fetchInitialTasks();
  }, []);

  return (
    <div>
      <Header />
      <section className="p-4">
        <TaskList />
      </section>
    </div>
  );
};

export default TaskManager;
