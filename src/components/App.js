import React from 'react';
import UseState from './UseState';
import UseEffectHook from './UseEffectHook';
import UseMemoHook from './UseMemoHook';
import UseRefHook from './UseRefHook';
import UseContextHook from './UseContextHook';

const App = () => {
  return (
    <div className='container'>
      <UseContextHook />
      {/*<UseRefHook />*/}
      {/* <UseState /> */}
      {/* <UseEffectHook /> */}
      {/*<UseMemoHook />*/}
    </div>
  );
};

export default App;
