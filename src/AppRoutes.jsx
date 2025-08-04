import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MasterPage from "./views/MasterPage";
import MainLayout from "./layouts/MainLayout";
import Login from "./views/Login";
import FormPage from "./views/FormPage";
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Services from './pages/Services';
// import NotFound from './pages/NotFound';

function AppRoutes({ isLoggedIn, onLogin, onLogout }) {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout isLoggedIn={isLoggedIn} onLogout={onLogout}>
              <MasterPage />
            </MainLayout>
          }
        />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
