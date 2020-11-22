import React from 'react';
import UseState from './UseState';
import UseEffectHook from './UseEffectHook';
import UseMemoHook from './UseMemoHook';

const App = () => {
  return (
    <div className='container'>
      {/* <UseState /> */}
      {/* <UseEffectHook /> */}
      <UseMemoHook />
    </div>
  );
};

export default App;
