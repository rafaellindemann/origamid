import React from 'react';

function useNumeroAleatorio() {
  React.useEffect(() => {
    document.title = Math.random();
  }, []);
}

const App = () => {
  useNumeroAleatorio();
  return <div></div>;
};

export default App;
