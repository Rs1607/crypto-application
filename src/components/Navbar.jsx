import React, { useState } from "react";
import { Form, FormControl, Button, Navbar as BootstrapNavbar, Container } from "react-bootstrap";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); 
  };

  return (
    <BootstrapNavbar bg="black" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand href="/">Exam</BootstrapNavbar.Brand>
        <Form className="d-flex" style={{ marginLeft: "auto" }}>
          <FormControl
            type="search"
            placeholder="Search coin..."
            className="me-2"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;



