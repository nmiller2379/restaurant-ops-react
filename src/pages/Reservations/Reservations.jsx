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
                onSubmit={(data) => {
                  console.log("clicked");
                  dispatch({
                    type: "ADD_RESERVATION",
                    payload: { ...data, id: nextId() },
                  });
                  setDisplayForm(false);
                }}
                onCancel={() => setDisplayForm(false)}
                tables={state.tables}
              />
            </Card.Body>
          </Card>
        )}
      </div>
    </>
  );
}
