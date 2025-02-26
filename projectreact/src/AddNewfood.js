import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const AddNewfood = ({ onAdd }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    if (!name || !price || !imageUrl) {
      alert("Please fill all fields");
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      ordered: false,
      imageUrl,
    };

    // Ensure onAdd exists before calling it
    if (typeof onAdd === "function") {
      onAdd(newItem);
    }

    try {
      await fetch("http://localhost:2002/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      //alert("New item added successfully!");
      //---------------------------------------------------------

Swal.fire({
  title: "Success!",
  text: "New item added successfully!",
  icon: "success",
  showConfirmButton: false, // Removes the default button
  timer: 2500, // Auto-close after 2.5 seconds
  toast: true, // Makes it a toast notification
  position: "top-center", // Shows at the top-right corner
  background: "#f0f9eb", // Light green background
  color: "#2e7d32", // Dark green text color
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  }
});

      //---------------------------------------------------------
    } catch (error) {
      console.error("Error adding item:", error);
    }

    handleClose();
  };

  return (
    <>
      <Button variant="success" className="mb-3" onClick={handleShow}>
        Add New Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Menu Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Price ($)</Form.Label>
              <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            </Form.Group>

            <Button variant="primary" className="mt-3" onClick={handleSubmit}>
              Add Item
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddNewfood;
