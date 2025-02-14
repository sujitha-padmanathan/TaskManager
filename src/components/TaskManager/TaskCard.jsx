import { Col, Card, Button } from "react-bootstrap";
import { deleteTaskAsync, toggleTaskStatusAsync } from "../../redux/reducer/taskReducer";
import { useDispatch } from "react-redux";

const TaskCard = ({ title, isCompleted, id }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(toggleTaskStatusAsync(id));
  };

  const handleDelete = () => {
    dispatch(deleteTaskAsync(id));
  };
  return (
    <Col xs={12} md={3} lg={4} className="mt-4">
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <input
                type="checkbox"
                checked={isCompleted}
                onClick={handleEdit}
              />
              <span>{title}</span>
            </div>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TaskCard;
