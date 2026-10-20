import { Card, Button, Alert } from "react-bootstrap";
import MenuForm from "../../components/MenuForm/MenuForm";
import MenuList from "../../components/MenuList/MenuList";
import EditMenuModal from "../../components/MenuModal/MenuModal";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { useContext } from "react";
import { nextId } from "../../utils/nextId";
import restaurantContext from "../../context/RestaurantContext";

export default function Menu() {
  // TODO: Implement the Menu page functionality, including displaying the menu list, handling menu form submissions, and editing menu items.
  const { dispatch, state } = useContext(restaurantContext);
  const [showModal, setShowModal] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });
  const showAlert = alert.show;
  const [displayForm, setDisplayForm] = useState(false);

  const handleMenuFormSubmit = (formData) => {
    console.log("Form data submitted:", formData);
    const menuItem = {
      ...formData,
      id: nextId(state.menuItems),
      price: parseFloat(formData.price),
    };
    dispatch({ type: "ADD_MENU_ITEM", payload: menuItem });
    setDisplayForm(false);
    setAlert({
      show: true,
      message: "Menu item added successfully!",
      variant: "success",
    });
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_MENU_ITEM", payload: { id } });
  };

  const handleDelete = (id) => {
    dispatch({ type: "REMOVE_MENU_ITEM", payload: { id } });
  };

  return (
    <>
      <Header text="Menu" />
      <div>
        <Button
          className={displayForm ? "active" : ""}
          variant="primary"
          onClick={() => setDisplayForm(!displayForm)}
        >
          Add Menu Item
        </Button>

        {displayForm && (
          <Card>
            <Card.Body className="menu-form">
              <MenuForm
                onSubmit={handleMenuFormSubmit}
                onCancel={() => setDisplayForm(false)}
              />
            </Card.Body>
          </Card>
        )}
      </div>
      <div>
        <Card>
          <Card.Title>Menu Items</Card.Title>
          <Card.Body>{/* <MenuList /> */}</Card.Body>
        </Card>
      </div>
      {/* Search Menu Items Component */}
      <div>
        <Card>
          <Card.Body>
            <MenuList
              menuItems={state.menuItems}
              handleEdit={(id) => setShowModal(id)}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          </Card.Body>
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
