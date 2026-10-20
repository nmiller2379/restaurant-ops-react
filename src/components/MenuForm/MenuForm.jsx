import { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

export default function MenuForm({
  initialValue = {
    id: null,
    name: "",
    category: "",
    price: "",
    available: true,
    description: "",
  },
  onSubmit,
  onCancel,
}) {
  const [formData, setFormData] = useState(initialValue);
  return (
    <Container>
      <Form>
        <Row className="g-2">
          <Col className="col-md-4">
            <Form.Group controlId="formMenuItemName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={initialValue.name || "Enter menu item name"}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Group>
          </Col>
          <Col className="col-md-3">
            <Form.Group controlId="formMenuItemCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder={initialValue.category || "Enter category"}
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
            </Form.Group>
          </Col>
          <Col className="col-md-3">
            <Form.Group controlId="formMenuItemPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder={initialValue.price || "Enter price"}
                value={formData.price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Col>
          <Col className="col-md-2">
            <Form.Label>Mark as:</Form.Label>
            <Button
              variant={formData.available ? "warning" : "success"}
              type="button"
              onClick={() =>
                setFormData({ ...formData, available: !formData.available })
              }
            >
              {formData.available ? "Unavailable" : "Available"}
            </Button>
          </Col>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formMenuItemDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder={initialValue.description || "Enter description"}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
        </Row>
        <Button
          variant="primary"
          type="submit"
          className="me-2"
          onClick={(e) => {
            e.preventDefault();
            onSubmit(formData);
          }}
        >
          {initialValue.id ? "Save Changes" : "Add Menu Item"}
        </Button>
        <Button variant="secondary" type="button" onClick={onCancel}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
}
