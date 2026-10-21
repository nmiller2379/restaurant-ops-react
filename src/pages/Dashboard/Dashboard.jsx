import { useContext } from "react";
import restaurantContext from "../../context/RestaurantContext";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Image } from "react-bootstrap";
import Header from "../../components/Header/Header";
import { formatCurrency } from "../../utils/nextId";
import styles from "./Dashboard.module.css";
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
                className={styles.hero}
                src={restaurantImage}
                alt="Dashboard"
                fluid
              />
            </Card.Body>
          </Card>
          <Container>
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <div className={styles.metricValue}>{state.tables.length}</div>
                    <div className={styles.metricLabel}>Total Tables</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <div className={styles.metricValue}>
                      {
                        state.tables.filter(
                          (table) => table.status === "seated",
                        ).length
                      }
                    </div>
                    <div className={styles.metricLabel}>Occupied Tables</div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <div className={styles.metricValue}>
                      {state.reservations.length}
                    </div>
                    <div className={styles.metricLabel}>Total Reservations</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <div className={styles.metricValue}>
                        {formatCurrency(
                          state.menuItems.reduce(
                            (total, item) => total + parseFloat(item.price),
                            0,
                          ) / (state.menuItems.length || 1),
                        )}
                      </div>
                      <div className={styles.metricLabel}>Average Menu Price</div>
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
