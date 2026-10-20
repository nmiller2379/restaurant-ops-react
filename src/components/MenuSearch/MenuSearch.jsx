import { useState } from "react";
import { Form, Card, Container, Row, Col, Button } from "react-bootstrap";

export default function MenuSearch({ handleSearch, menuItems }) {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");
  return (
    <Card>
      <Card.Body>
        <Form>
          <Container>
            <Row>
              <Col className="col-md-5">
                <Form.Control
                  type="text"
                  placeholder="Search menu items..."
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
              </Col>
              <Col className="col-md-4">
                <Form.Select
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                >
                  <option value="">All Categories</option>
                  {Array.from(
                    new Set(menuItems.map((item) => item.category)),
                  ).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Button
                  variant="outline-primary"
                  onClick={() => handleSearch(searchValue, category)}
                >
                  Search
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    console.log("Clearing search");
                    setSearchValue("");
                    setCategory("");
                    handleSearch("", "");
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
