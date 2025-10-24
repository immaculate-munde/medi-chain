import React, { useState } from 'react';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <div className="w-full min-h-screen bg-gray-50">
      {isLoggedIn ? <Dashboard onLogout={() => setIsLoggedIn(false)} /> : <Landing onLogin={() => setIsLoggedIn(true)} />}
    </div>;
}