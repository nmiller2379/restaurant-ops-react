import Offcanvas from "react-bootstrap/Offcanvas";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function MobileNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className="mobile-header d-block d-md-none">
        <Button
          variant="outline-light"
          aria-label="Open Navigation Menu"
          onClick={handleShow}
        >
          ☰
        </Button>
        <span className="ms-3">Copper Table</span>
      </header>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className="mobile-sidebar"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Copper Table</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
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
