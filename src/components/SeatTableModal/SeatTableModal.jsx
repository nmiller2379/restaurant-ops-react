import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SeatTableModal({
  show,
  onHide,
  guestCount,
  setGuestCount,
  handleSubmit,
}) {
  return (
    <Modal show={show === "seat"} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Seat Table</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formGuests">
            <Form.Label>Guests</Form.Label>
            <Form.Control
              type="number"
              placeholder={guestCount.guests}
              value={guestCount.guests}
              onChange={(e) =>
                setGuestCount({
                  ...guestCount,
                  guests: e.target.value,
                })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleSubmit}>
          Seat Guests
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
