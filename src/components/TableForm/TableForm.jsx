import { useState } from "react";
import { toInt, InvalidIntegerError } from "../../utils/nextId";
import { Form, Button } from "react-bootstrap";

function TableForm({
  initialValue = { tableNumber: "", seats: "" },
  onSubmit,
  onCancel,
}) {
  const [formData, setFormData] = useState({
    tableNumber: initialValue.tableNumber ?? "",
    seats: initialValue.seats ?? "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let seats;
    try {
      seats = toInt(formData.seats);
    } catch (err) {
      if (!(err instanceof InvalidIntegerError)) throw err;
      setError("Seats must be a valid number");
      return;
    }
    setError("");
    onSubmit({ tableNumber: formData.tableNumber, seats });
    setFormData({ tableNumber: "", seats: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="tableNumber" className="mb-3">
        <Form.Label>Table Number</Form.Label>
        <Form.Control
          type="text"
          name="tableNumber"
          value={formData.tableNumber}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="seats" className="mb-3">
        <Form.Label>Seats</Form.Label>
        <Form.Control
          type="number"
          name="seats"
          value={formData.seats}
          onChange={handleChange}
        />
      </Form.Group>
      {error && <p className="text-danger">{error}</p>}
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {onCancel && (
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      )}
    </Form>
  );
}

export default TableForm;
