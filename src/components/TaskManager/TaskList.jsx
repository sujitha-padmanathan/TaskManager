import { Row, Spinner, Button } from "react-bootstrap";
import TaskCard from "./TaskCard";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/reducer/taskReducer";
const TaskList = () => {
  const { tasks, filter, isLoading } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  if (isLoading)
    return (
      <div className="d-flex justify-content-center w-100">
        <Spinner />
      </div>
    );

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.isCompleted;
    if (filter === "completed") return task.isCompleted;
    return true;
  });

  return (
    <>
      <div className="mb-3">
        <Button
          variant={filter === "all" ? "dark" : "outline-dark"}
          className="me-2"
          onClick={() => dispatch(setFilter("all"))}
        >
          All
        </Button>
        <Button
          variant={filter === "pending" ? "dark" : "outline-warning"}
          className="me-2"
          onClick={() => dispatch(setFilter("pending"))}
        >
          Pending
        </Button>
        <Button
          variant={filter === "completed" ? "dark" : "outline-success"}
          className="me-2"
          onClick={() => dispatch(setFilter("completed"))}
        >
          Completed
        </Button>
      </div>
      <Row>
        {Array.isArray(filteredTasks) &&
          filteredTasks.map((item) => {
            return <TaskCard {...item} />;
          })}
      </Row>
    </>
  );
};

export default TaskList;
