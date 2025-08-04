import { useState } from "react";
import AppRoutes from "./AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AppRoutes
      isLoggedIn={isLoggedIn}
      onLogin={handleLogin}
      onLogout={handleLogout}
    />
  );
}

export default App;
