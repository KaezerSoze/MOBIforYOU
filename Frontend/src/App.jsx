import { useState } from 'react';
import NavBar from './components/globals/NavBar';
import Router from './components/navigation/Router';





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <Router isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}   />
      
      
    </div>
  );
}

export default App;
