import { Table, Button, Badge } from "react-bootstrap";

export default function MenuList({
  menuItems,
  handleEdit,
  handleToggle,
  handleDelete,
}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Availability</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {menuItems.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              {item.available ? (
                <Badge bg="success">Available</Badge>
              ) : (
                <Badge bg="danger">Unavailable</Badge>
              )}
            </td>
            <td>
              <Button
                variant="outline-secondary"
                onClick={() => handleEdit(item.id)}
              >
                Edit
              </Button>{" "}
              <Button
                variant="outline-warning"
                onClick={() => handleToggle(item.id)}
              >
                Toggle
              </Button>{" "}
              <Button
                variant="outline-danger"
                onClick={() => handleDelete(item.id)}
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
