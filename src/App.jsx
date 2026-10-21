import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar/Sidebar";
import Tables from "./pages/Tables/Tables";
import Menu from "./pages/Menu/Menu";
import Dashboard from "./pages/Dashboard/Dashboard";
import Reservations from "./pages/Reservations/Reservations";
import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={12} md={3}>
            <Sidebar />
          </Col>
          <Col xs={12} md={9} className="app-body">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="*" element={<div>Error: Page not found</div>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}
