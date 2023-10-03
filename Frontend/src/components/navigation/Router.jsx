import { Route, Routes, Navigate } from "react-router-dom";
import RegistrationForm from "../authentification/Inscription";
import LoginForm from "../authentification/Login";

export default function Router({ isLoggedIn, setIsLoggedIn }) {
  return (
    <Routes>
      {/* Redirige vers /auth si l'utilisateur est déjà connecté */}
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/auth" /> : <RegistrationForm />}
      />
      <Route
        path="/login"
        element={<LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      />
    </Routes>
  );
}
