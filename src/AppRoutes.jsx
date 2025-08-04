import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MasterPage from "./views/MasterPage";
import MainLayout from "./layouts/MainLayout";
import Login from "./views/Login";

function AppRoutes({ isLoggedIn, onLogin, onLogout }) {
  return (
    <Router>
      <MainLayout isLoggedIn={isLoggedIn} onLogout={onLogout}>
        <Routes>
          <Route path="/" element={<MasterPage />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
export default AppRoutes;
