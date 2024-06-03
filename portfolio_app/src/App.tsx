import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import 'normalize.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
