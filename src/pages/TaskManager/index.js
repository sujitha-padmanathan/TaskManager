import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTasks} from "../../redux/reducer/taskReducer";
import Header from "../../components/TaskManager/Header";
import TaskList from "../../components/TaskManager/TaskList";

const TaskManager = () => {
  const dispatch = useDispatch();

  const fetchInitialTasks = () => {
    dispatch(fetchTasks())
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
