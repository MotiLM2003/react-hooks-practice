import React, { useState, useRef, useEffect } from 'react';

const UseRefHook = () => {
  const [name, setName] = useState('');
  const renderCount = useRef(0);
  const inputRef = useRef();
  const previousName = useRef(name);
  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    previousName.current = name;
  }, [name]);
  return (
    <div>
      <input
        type='text'
        value={name}
        ref={inputRef}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is: {name} and it used to be: {previousName.current}
      </div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={() => inputRef.current.focus()}></button>
    </div>
  );
};

export default UseRefHook;
