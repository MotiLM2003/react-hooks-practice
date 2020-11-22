import React, { useState, useEffect } from 'react';

const UseEffectHook = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        console.log(json);
      });
  }, [resourceType]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // clean up;
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>users</button>
      <button onClick={() => setResourceType('comments')}>comments</button>
      <h1>{resourceType}</h1>
      {/*items &&
        items.map((item) => {
          return <div key={item.id}>{JSON.stringify(item)}</div>;
        })*/}

      <div>window width: {windowWidth}</div>
    </div>
  );
};

export default UseEffectHook;
