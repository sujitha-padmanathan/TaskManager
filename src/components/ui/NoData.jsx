import React from "react";
import { Card } from "react-bootstrap";

function NoData({ message = "No data to display" }) {
  return (
    <div className="d-flex justify-content-center my-4">
      <div className="w-50">
        <Card>
          <Card.Body className="text-center">{message}</Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default NoData;
