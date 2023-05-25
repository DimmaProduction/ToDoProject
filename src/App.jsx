import React, { useRef } from 'react';
import Background from 'components/Background';
import Overlay from 'components/Overlay';

function App() {
  const scroll = useRef(0);

  return (
    <>
      <Background />
      <Overlay scroll={scroll} />
    </>
  );
}

export default App;
