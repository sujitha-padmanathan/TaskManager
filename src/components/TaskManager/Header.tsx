import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/reducer/taskReducer";
import { Button } from "react-bootstrap";

const Header = () => {
  const [task, setTask] = useState<string>("");
  const dispatch = useDispatch();

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask("");
  };

  return (
    <header className="d-flex flex-column align-items-center">
      <h1>Task Manager</h1>
      <form
        onSubmit={handleAdd}
        className="d-flex justify-content-between align-items-center gap-2"
      >
        <label htmlFor="task">Task:</label>
        <input
          id="task"
          placeholder="Title"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          required
        />
        <Button variant="primary" type="submit">
          Add
        </Button>
      </form>
    </header>
  );
};

export default Header;
