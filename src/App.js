import React, { useState } from 'react';
import Header from '../src/components/Header';
import Body from '../src/components/Body';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const productList = [
    { id: 1, name: 'Картопля', isSelected: false, comments: [] },
    { id: 2, name: 'Киртопля', isSelected: false, comments: [] },
    { id: 3, name: 'Куртопля', isSelected: false, comments: [] },
  ];

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Header isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
          <Body productList={productList} />
        </div>
      ) : (
        <div>
          <Header isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} />
        </div>
      )}
    </div>
  );
};

export default App;