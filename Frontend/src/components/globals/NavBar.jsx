import { NavLink, useNavigate } from 'react-router-dom';

function NavBar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Supprimer le token du local storage
    localStorage.removeItem('token');
    // Mettre à jour l'état de connexion pour afficher le bouton de connexion dans la NavBar
    setIsLoggedIn(false);
    // Rediriger vers la page de connexion
    navigate("/login");
  };

  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/home">
            <h2>MOBI4YOU</h2>
          </NavLink>
        </li>
      </ul>

      {isLoggedIn && (
        <button onClick={handleLogout}>Déconnexion</button>
      )}
    </div>
  );
}

export default NavBar;
