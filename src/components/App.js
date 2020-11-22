import React from 'react';
import UseState from './UseState';
import UseEffectHook from './UseEffectHook';
import UseMemoHook from './UseMemoHook';
import UseRefHook from './UseRefHook';
import UseContextHook from './UseContextHook';
import UseCallbackHook from './UseCallbackHook';

const App = () => {
  return (
    <div className='container'>
      {/*(<UseContextHook /> */}
      {/*<UseRefHook />*/}
      {/* <UseState /> */}
      {/* <UseEffectHook /> */}
      {/*<UseMemoHook />*/}
      <UseCallbackHook />
    </div>
  );
};

export default App;
