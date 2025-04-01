import React from 'react';
import './App.css'
import { Stars } from './components/Stars';

const App = () => {
  return (
    <div>
      {/* Примеры использования */}
      <Stars count={1} />
      <Stars count={3} />
      <Stars count={5} />
      <Stars count={0} /> {/* не отображается */}
      <Stars count={6} /> {/* не отображается */}
      <Stars count="invalid" /> {/* не отображается */}
    </div>
  );
};

export default App
