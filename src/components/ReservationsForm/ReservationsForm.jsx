import { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

export default function ReservationsForm({
  initialValue = {
    id: null,
    name: "",
    date: "",
    time: "",
    contact: "",
    partySize: "1",
    table: "",
    reservationStatus: "",
  },
  onSubmit,
  onCancel,
  tables,
}) {
  const [formData, setFormData] = useState(initialValue);
  return (
    <Container>
      <Form>
        <Row>
          <Col className="col-md-4">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Group>
          </Col>
          <Col className="col-md-2">
            <Form.Group controlId="partySize">
              <Form.Label>Party Size</Form.Label>
              <Form.Control
                type="number"
                value={formData.partySize}
                onChange={(e) =>
                  setFormData({ ...formData, partySize: e.target.value })
                }
              />
            </Form.Group>
          </Col>
          <Col className="col-md-3">
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </Form.Group>
          </Col>
          <Col className="col-md-3">
            <Form.Group controlId="time">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="col-md-4">
            <Form.Group controlId="contact">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
              />
            </Form.Group>
          </Col>
          <Col className="col-md-4">
            <Form.Group controlId="table">
              <Form.Label>Table</Form.Label>
              <Form.Select
                value={formData.table}
                onChange={(e) =>
                  setFormData({ ...formData, table: e.target.value })
                }
              >
                <option value="">Unassigned</option>
                {tables.map((table) => (
                  <option key={table.id} value={table.id}>
                    Table {table.tableNumber} ({table.seats} Cap)
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col className="col-md-4">
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={formData.reservationStatus}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    reservationStatus: e.target.value,
                  })
                }
              >
                <option value="">Select status</option>
                <option value="upcoming">Upcoming</option>
                <option value="seated">Seated</option>
                <option value="completed">Completed</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" onClick={() => onSubmit(formData)}>
          Submit
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
}
