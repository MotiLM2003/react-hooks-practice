import React from 'react';
import UseState from './UseState';
import UseEffectHook from './UseEffectHook';
import UseMemoHook from './UseMemoHook';
import UseRefHook from './UseRefHook';

const App = () => {
  return (
    <div className='container'>
      <UseRefHook />
      {/* <UseState /> */}
      {/* <UseEffectHook /> */}
      {/*<UseMemoHook />*/}
    </div>
  );
};

export default App;
