import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./DesktopNav.module.css";

export default function DesktopNav() {
  return (
    <Nav className={`flex-row flex-md-column ${styles.nav}`}>
      <h1 className={`d-none d-md-inline ${styles.brandTitle}`}>
        Copper Table
      </h1>
      <p
        className={`d-none d-md-inline ${styles.brandTitle} ${styles.brandSubtitle}`}
      >
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
