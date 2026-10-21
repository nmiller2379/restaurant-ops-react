import Offcanvas from "react-bootstrap/Offcanvas";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import styles from "./MobileNav.module.css";

export default function MobileNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className={`d-md-none ${styles.header}`}>
        <Button
          variant="outline-secondary"
          className={styles.toggle}
          aria-label="Open Navigation Menu"
          onClick={handleShow}
        >
          ☰
        </Button>
        <span className={`ms-3 ${styles.brandTitle}`}>Copper Table</span>
      </header>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className={styles.sidebar}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={styles.brandTitle}>
            Copper Table
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className={`flex-column ${styles.nav}`}>
            <Nav.Link as={NavLink} to="/" onClick={handleClose}>
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/menu" onClick={handleClose}>
              Menu
            </Nav.Link>
            <Nav.Link as={NavLink} to="/tables" onClick={handleClose}>
              Tables
            </Nav.Link>
            <Nav.Link as={NavLink} to="/reservations" onClick={handleClose}>
              Reservations
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
