import { Table, Button, Badge } from "react-bootstrap";

export default function TableList({
  tables,
  handleEdit,
  handleSeat,
  handleClear,
  handleDelete,
}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Table Number</th>
          <th>Seats</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tables.map((table) => (
          <tr key={table.id}>
            <td>{table.tableNumber}</td>
            <td>{table.seats}</td>
            <td>
              <Badge
                bg={
                  table.status === "available"
                    ? "success"
                    : table.status === "seated"
                      ? "warning"
                      : "danger"
                }
              >
                {table.status}
              </Badge>
            </td>
            <td>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => handleEdit(table.id)}
              >
                Edit
              </Button>{" "}
              <Button
                variant="outline-success"
                size="sm"
                onClick={() => handleSeat(table.id)}
              >
                Seat
              </Button>{" "}
              <Button
                variant="outline-warning"
                size="sm"
                onClick={() => handleClear(table.id)}
              >
                Clear
              </Button>{" "}
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => handleDelete(table.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
