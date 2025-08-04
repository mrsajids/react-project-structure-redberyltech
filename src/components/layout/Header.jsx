import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#" onClick={() => navigate("/")}>Redberyltech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/form")}>Entry Form</Nav.Link>
            <Nav.Link onClick={() => navigate("/users")}>Users</Nav.Link>
          </Nav>
          {isLoggedIn ? (
            <Button variant="outline-light" onClick={onLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="outline-light" onClick={() => navigate("/login")}>Login</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
