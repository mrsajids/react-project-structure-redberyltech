import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/users", label: "User" },
  { path: "/contact", label: "Contact" },
];

const Header = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Navbar bg="light" variant="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#" onClick={() => navigate("/")}>Redberyltech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map(({ path, label }) => (
              <Nav.Link
                key={path}
                active={location.pathname === path}
                onClick={() => navigate(path)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          {isLoggedIn ? (
            <Button size="sm" variant="outline-dark" onClick={onLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="outline-dark" size="sm" onClick={() => navigate("/login")}>Login</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
