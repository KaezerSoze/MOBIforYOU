import { useNavigate } from 'react-router-dom';

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
      <div className="navbar-content">
      <div className="logo-container">
    <img src="/assets/globals/Black_And_White_Modern_Vintage_Retro_Brand_Logo.png" alt="Logo" className="logo-image" />
        <h4>MOBI4YOU</h4>
      
        {isLoggedIn && (
          <button className='logout-button' onClick={handleLogout}>Déconnexion</button>
        )}
      </div>
      </div>
    </div>
  );
  
}

export default NavBar;
