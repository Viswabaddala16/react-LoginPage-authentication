import React, { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Profile user={user} handleLogout={handleLogout} />
        </>
      )}
    </div>
  );
}

export default App;
