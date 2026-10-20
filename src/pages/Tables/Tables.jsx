import { Card, Button, Alert } from "react-bootstrap";
import TableForm from "../../components/TableForm/TableForm";
import TableList from "../../components/TableList/TableList";
import EditTableModal from "../../components/EditTableModal/EditTableModal";
import SeatTableModal from "../../components/SeatTableModal/SeatTableModal";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { useContext } from "react";
import { nextId, toInt, InvalidIntegerError } from "../../utils/nextId";
import restaurantContext from "../../context/RestaurantContext";

export default function Tables() {
  const { dispatch, state } = useContext(restaurantContext);
  const [displayForm, setDisplayForm] = useState(false);
  const [showModal, setShowModal] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });
  const [editTableId, setEditTableId] = useState({
    id: null,
    tableNumber: "",
    seats: "",
  });
  const [guestCount, setGuestCount] = useState({
    id: null,
    guests: "",
    status: "",
    seats: "",
  });

  const handleEdit = (tableId) => {
    const table = state.tables.find((t) => t.id === tableId);
    setEditTableId({
      id: table.id,
      tableNumber: table.tableNumber,
      seats: table.seats,
    });
    setShowModal("edit");
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    let seats;
    try {
      seats = toInt(editTableId.seats);
    } catch (err) {
      if (!(err instanceof InvalidIntegerError)) throw err;
      setAlert({
        show: true,
        message: "Seats must be a valid number",
        variant: "danger",
      });
      setShowModal(null);
      return;
    }
    dispatch({
      type: "EDIT_TABLE",
      payload: {
        id: editTableId.id,
        tableNumber: editTableId.tableNumber,
        seats,
      },
    });
    setShowModal(null);
    setAlert({
      show: true,
      message: "Table updated successfully",
      variant: "success",
    });
  };

  const handleGuestModalSubmit = (e) => {
    console.log(guestCount);

    e.preventDefault();
    let guests;
    try {
      guests = toInt(guestCount.guests);
    } catch (err) {
      if (!(err instanceof InvalidIntegerError)) throw err;
      setAlert({
        show: true,
        message: "Guest count must be a valid number",
        variant: "danger",
      });
      setShowModal(null);
      return;
    }
    if (guests > toInt(guestCount.seats)) {
      setAlert({
        show: true,
        message: "Guest count exceeds number of seats",
        variant: "danger",
      });
      setShowModal(null);
      return;
    }
    if (guests <= 0) {
      setAlert({
        show: true,
        message: "Guest count must be a positive number",
        variant: "danger",
      });
      setShowModal(null);
      return;
    }
    dispatch({
      type: "SEAT_TABLE",
      payload: guestCount,
    });
    setShowModal(null);
    setAlert({
      show: true,
      message: "Table seated successfully",
      variant: "success",
    });
  };

  const handleSeat = (tableId) => {
    const table = state.tables.find((t) => t.id === tableId);
    if (table.status !== "available") {
      setAlert({
        show: true,
        message: "Table is not available",
        variant: "danger",
      });
      return;
    }
    setGuestCount({
      id: table.id,
      guests: table.guests,
      status: "seated",
      seats: table.seats,
    });
    setShowModal("seat");
  };

  const handleClear = (tableId) => {
    dispatch({ type: "CLEAR_TABLE", payload: { id: tableId } });
    setAlert({
      show: true,
      message: "Table cleared successfully",
      variant: "success",
    });
  };

  const handleDelete = (tableId) => {
    dispatch({ type: "REMOVE_TABLE", payload: { id: tableId } });
    setAlert({
      show: true,
      message: "Table deleted successfully",
      variant: "success",
    });
  };

  const handleSubmit = ({ tableNumber, seats }) => {
    const newTable = {
      id: nextId(state.tables),
      tableNumber,
      seats,
      status: "available",
      guests: 0,
    };
    dispatch({ type: "ADD_TABLE", payload: newTable });
  };

  return (
    <>
      <Header text="Tables" />
      <div>
        <Button
          className={displayForm ? "active" : ""}
          variant="primary"
          onClick={() => setDisplayForm(!displayForm)}
        >
          Add Table
        </Button>
        {displayForm && (
          <Card>
            <Card.Body>
              <TableForm
                initialValue={{ tableNumber: "", seats: "" }}
                onSubmit={handleSubmit}
                onCancel={() => setDisplayForm(false)}
              />
            </Card.Body>
          </Card>
        )}
      </div>
      <div>
        <Card>
          <Card.Body>
            <Card.Title>Tables</Card.Title>
            <TableList
              tables={state.tables}
              handleEdit={handleEdit}
              handleSeat={handleSeat}
              handleClear={handleClear}
              handleDelete={handleDelete}
            />
          </Card.Body>
        </Card>
      </div>
      <EditTableModal
        show={showModal}
        onHide={() => setShowModal(null)}
        editTableState={editTableId}
        setEditTableState={setEditTableId}
        handleSubmit={handleModalSubmit}
      />
      <SeatTableModal
        show={showModal}
        onHide={() => setShowModal(null)}
        guestCount={guestCount}
        setGuestCount={setGuestCount}
        handleSubmit={handleGuestModalSubmit}
      />
      {alert.show && (
        <Alert
          variant={alert.variant}
          onClose={() => setAlert({ ...alert, show: false })}
          dismissible
        >
          {alert.message}
          <Button
            variant="btn-close"
            aria-label="Close"
            onClick={() => setAlert({ ...alert, show: false })}
          />
        </Alert>
      )}
    </>
  );
}
