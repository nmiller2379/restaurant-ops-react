import { Table, Button, Badge } from "react-bootstrap";

const STATUS_VARIANTS = {
  upcoming: "primary",
  seated: "success",
  completed: "secondary",
};

export default function ReservationList({
  reservations,
  tables = [],
  handleEdit,
  handleSeat,
  handleComplete,
  handleDelete,
}) {
  const tableLabel = (tableId) => {
    const table = tables.find((t) => String(t.id) === String(tableId));
    return table ? `Table ${table.tableNumber}` : "Unassigned";
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Guest</th>
          <th>Party</th>
          <th>Date</th>
          <th>Time</th>
          <th>Table</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((reservation) => {
          const status = reservation.reservationStatus;
          return (
            <tr key={reservation.id}>
              <td>
                {reservation.name}
                <div className="text-muted small">{reservation.contact}</div>
              </td>
              <td>{reservation.partySize}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{tableLabel(reservation.table)}</td>
              <td>
                <Badge bg={STATUS_VARIANTS[status] ?? "dark"}>
                  {status || "unknown"}
                </Badge>
              </td>
              <td>
                <Button
                  variant="outline-secondary"
                  onClick={() => handleEdit(reservation.id)}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="outline-success"
                  disabled={status === "seated" || status === "completed"}
                  onClick={() => handleSeat(reservation.id)}
                >
                  Mark Seated
                </Button>{" "}
                <Button
                  variant="outline-warning"
                  disabled={status === "completed"}
                  onClick={() => handleComplete(reservation.id)}
                >
                  Complete
                </Button>{" "}
                <Button
                  variant="outline-danger"
                  onClick={() => handleDelete(reservation.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
