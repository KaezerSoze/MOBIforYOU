// components/navigation/Router.js
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "../authentification/Inscription";
import LoginForm from "../authentification/Login";



export default function Router({isLoggedIn, setIsLoggedIn }) {
  return (
    <Routes>
    <Route path="/" element={<RegistrationForm />} />
    <Route path="/auth/users" element={<LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
       
    </Routes>
  );
}
