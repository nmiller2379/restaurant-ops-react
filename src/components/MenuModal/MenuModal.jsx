import { Modal, Form, Button } from "react-bootstrap";
import MenuForm from "../MenuForm/MenuForm";

export default function MenuModal({ handleSubmit, show, onHide, menuItem }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit {menuItem ? menuItem.name : "Menu Item"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {menuItem ? (
          <MenuForm
            initialValue={menuItem}
            onSubmit={(data) => {
              console.log("Edited menu item data:", data);
              handleSubmit(data);
              onHide();
            }}
            onCancel={onHide}
          />
        ) : (
          <div>No menu item selected</div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
