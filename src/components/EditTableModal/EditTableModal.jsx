import { Modal, Button, Form } from "react-bootstrap";

export default function EditTableModal({
  show,
  onHide,
  editTableState,
  setEditTableState,
  handleSubmit,
}) {
  return (
    <Modal show={show === "edit"} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Table</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={handleSubmit}
        >
          <Form.Group controlId="formTableNumber">
            <Form.Label>Table Number</Form.Label>
            <Form.Control
              type="text"
              value={editTableState.tableNumber}
              onChange={(e) =>
                setEditTableState({
                  ...editTableState,
                  tableNumber: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="formSeats">
            <Form.Label>Seats</Form.Label>
            <Form.Control
              type="number"
              value={editTableState.seats}
              onChange={(e) =>
                setEditTableState({ ...editTableState, seats: e.target.value })
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Button variant="secondary" onClick={onHide} className="ms-2">
            Cancel
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
