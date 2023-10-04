import { Route, Routes, Navigate } from "react-router-dom";
import RegistrationForm from "../authentification/Inscription";
import LoginForm from "../authentification/Login";
import Home from "../pages/home"; 


export default function Router({ isLoggedIn, setIsLoggedIn }) {
  return (
    <Routes>
      {/* Redirige vers /home si l'utilisateur est déjà connecté */}
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/home" /> : <RegistrationForm />}
      />
      {/* Redirige vers /home si l'utilisateur est déjà connecté */}
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/home" /> : <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      />
      {/* Définissez la route /home ici */}
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
