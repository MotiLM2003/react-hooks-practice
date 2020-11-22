import React, { useState, useMemo, useEffect } from 'react';

function slowFunction(num) {
  console.log('calling slow function');
  for (let i = 0; i < 1000000000; i++) {}
  console.log('done');
  return num * 2;
}

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  /* 
 useMemo -  will  memo the function by the parameters passed in as dependencies;
 uses: 
 A) complicated function with dependencies.
 B) when using reference type as useEffect dependencies

 */
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <React.Fragment>
      <h1>useMemo Hook</h1>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </React.Fragment>
  );
};

export default UseMemoHook;
