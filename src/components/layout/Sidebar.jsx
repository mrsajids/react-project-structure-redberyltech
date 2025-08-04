import Nav from "react-bootstrap/Nav";

const Sidebar = () => (
  <div className="bg-light p-3" style={{ minHeight: "80vh", width: 220 }}>
    <Nav defaultActiveKey="#home" className="flex-column">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#form">Form</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
  </div>
);

export default Sidebar;
