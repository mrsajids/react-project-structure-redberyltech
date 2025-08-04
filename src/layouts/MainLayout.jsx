import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const MainLayout = ({ children, isLoggedIn, onLogout }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Container className="py-4">
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
