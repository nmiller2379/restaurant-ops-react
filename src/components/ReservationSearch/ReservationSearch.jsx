import { useState } from "react";
import { Form, Card, Container, Row, Col, Button } from "react-bootstrap";

export default function ReservationSearch({ handleSearch }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Container>
            <Row>
              <Col className="col-md-9">
                <Form.Control
                  type="text"
                  placeholder="Search by guest name..."
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
              </Col>
              <Col>
                <Button
                  variant="outline-primary"
                  onClick={() => handleSearch(searchValue)}
                >
                  Search
                </Button>{" "}
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    setSearchValue("");
                    handleSearch("");
                  }}
                >
                  Clear
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </Card.Body>
    </Card>
  );
}
