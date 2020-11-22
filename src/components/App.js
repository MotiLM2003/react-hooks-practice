import React, { useState, useEffect } from 'react';
import '../App.css';

const App = () => {
  const [count, setCount] = useState(() => {
    return 0;
  });

  const [settings, setSettings] = useState({ id: 1, name: 'moti' });

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className='container'>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>

      <div>{JSON.stringify(settings, null)}</div>
      <div>
        <input
          type='text'
          value={settings.name}
          onChange={(e) => setSettings({ ...settings, name: e.target.value })}
        />
      </div>
    </div>
  );
};

export default App;
