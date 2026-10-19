import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function DesktopNav() {
  return (
    <Nav className="flex-row flex-md-column desktop-nav">
      <h1 className="d-none d-md-inline brand-title">Copper Table</h1>
      <p className="d-none d-md-inline brand-title brand-subtitle">
        Operations
      </p>
      <Nav.Link as={NavLink} to="/">
        Dashboard
      </Nav.Link>
      <Nav.Link as={NavLink} to="/menu">
        Menu
      </Nav.Link>
      <Nav.Link as={NavLink} to="/tables">
        Tables
      </Nav.Link>
      <Nav.Link as={NavLink} to="/reservations">
        Reservations
      </Nav.Link>
    </Nav>
  );
}
