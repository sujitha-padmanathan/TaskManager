import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { Button } from "react-bootstrap";
import { addTaskAsync } from "../../redux/reducer/taskReducer";

const Header = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTaskAsync({ title: task, id: uuid(), isCompleted: false }));
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
