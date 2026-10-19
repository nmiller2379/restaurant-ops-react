import { useContext } from "react";
import restaurantContext from "../../context/RestaurantContext";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Image } from "react-bootstrap";
import Header from "../../components/Header/Header";
import { formatCurrency } from "../../utils/nextId";
import restaurantImage from "../../assets/restaurant-dashboard-image.jpg";
export default function Dashboard() {
  const { state } = useContext(restaurantContext);
  return (
    <>
      <Header text="Dashboard" />
      <main>
        <section id="dashboard">
          <Card className="mb-3 mb-md-4">
            <Card.Body className="p-2 p-md-3">
              <Image
                className="dashboard-hero"
                src={restaurantImage}
                alt="Dashboard"
                fluid
              />
            </Card.Body>
          </Card>
          <Container>
            <Row>
              <Col>
                <Card className="metric-card">
                  <Card.Body>
                    <div className="metric-value">{state.tables.length}</div>
                    <div className="metric-label">Total Tables</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="metric-card">
                  <Card.Body>
                    <div className="metric-value">
                      {
                        state.tables.filter(
                          (table) => table.status === "seated",
                        ).length
                      }
                    </div>
                    <div className="metric-label">Occupied Tables</div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="metric-card">
                  <Card.Body>
                    <div className="metric-value">
                      {state.reservations.length}
                    </div>
                    <div className="metric-label">Total Reservations</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Col>
                  <Card className="metric-card">
                    <Card.Body>
                      <div className="metric-value">
                        {formatCurrency(
                          state.menuItems.reduce(
                            (total, item) => total + item.price,
                            0,
                          ) / (state.menuItems.length || 1),
                        )}
                      </div>
                      <div className="metric-label">Average Menu Price</div>
                    </Card.Body>
                  </Card>
                </Col>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
