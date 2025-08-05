import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Master from "./views/Master";
import MainLayout from "./layouts/MainLayout";
import Login from "./views/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import Contact from "./views/Contact";

function AppRoutes({ isLoggedIn, onLogin, onLogout }) {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Layout route wraps all children */}
          <Route element={<MainLayout isLoggedIn={isLoggedIn} onLogout={onLogout} />}>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Master />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Routes outside MainLayout */}
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default AppRoutes;
