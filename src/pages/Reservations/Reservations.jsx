import { useState } from "react";
import { useContext } from "react";
import { nextId } from "../../utils/nextId";
import { Card, Button, Alert } from "react-bootstrap";
import restaurantContext from "../../context/RestaurantContext";
import Header from "../../components/Header/Header";
import ReservationsForm from "../../components/ReservationsForm/ReservationsForm";

export default function Reservations() {
  const { dispatch, state } = useContext(restaurantContext);
  const [showModal, setShowModal] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });
  const showAlert = alert.show;
  const [displayForm, setDisplayForm] = useState(null);
  const [displaySearch, setDisplaySearch] = useState(false);

  const handleAddReservation = (data) => {
    const table = state.tables.find((t) => String(t.id) === String(data.table));
    const partySize = Number.parseInt(String(data.partySize), 10);

    if (!table) {
      setAlert({
        show: true,
        message: "Please select a table.",
        variant: "danger",
      });
      return;
    }
    if (Number.isNaN(partySize) || partySize > Number(table.seats)) {
      setAlert({
        show: true,
        message: `Table ${table.tableNumber} seats ${table.seats}, which is too small for a party of ${data.partySize}.`,
        variant: "danger",
      });
      return;
    }
    if (data.reservationStatus === "seated" && table.status !== "available") {
      setAlert({
        show: true,
        message: `Table ${table.tableNumber} is not available.`,
        variant: "danger",
      });
      return;
    }

    setAlert({ ...alert, show: false });
    dispatch({
      type: "ADD_RESERVATION",
      payload: { ...data, id: nextId(state.reservations) },
    });
    setDisplayForm(false);
  };

  return (
    <>
      <Header text="Reservations" />
      <div>
        <Button
          className={displayForm ? "active" : ""}
          variant="primary"
          onClick={() => setDisplayForm(!displayForm)}
        >
          Add Reservation
        </Button>

        {displayForm && (
          <Card>
            <Card.Body>
              <ReservationsForm
                onSubmit={handleAddReservation}
                onCancel={() => setDisplayForm(false)}
                tables={state.tables}
              />
            </Card.Body>
          </Card>
        )}
        <Card>
          <Card.Body>{/* Reservations search goes here */}</Card.Body>
        </Card>
        <Card>
          <Card.Body>{/* Reservations list goes here */}</Card.Body>
        </Card>
      </div>
      {showAlert && (
        <Alert
          variant={alert.variant}
          onClose={() => setAlert({ ...alert, show: false })}
          dismissible
        >
          {alert.message}
        </Alert>
      )}
    </>
  );
}
