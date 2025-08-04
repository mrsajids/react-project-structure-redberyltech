import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MasterPage from "./views/MasterPage";
import MainLayout from "./layouts/MainLayout";
import Login from "./views/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import DataComponent from "./DataComponent";

function AppRoutes({ isLoggedIn, onLogin, onLogout }) {
  return (
    <Provider store={store}>
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
          <Route
            path="/1"
            element={
              <MainLayout isLoggedIn={isLoggedIn} onLogout={onLogout}>
                <DataComponent />
              </MainLayout>
            }
          />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default AppRoutes;
