import React, { useState } from 'react';
import './App.css';
import Detrait from './Components/Detrait';
import Depot from './Components/Depot';  

import Recharge from './Components/Recharge';

function App() {
  const [balance, setBalance] = useState(20000);

  return (
    <div className="app-container">
      <h1 className="title">Banque</h1>
      <p className="balance">{balance} da</p>
      
      <div className="grid">
        <Detrait balance={balance} setBalance={setBalance} />
        <Depot balance={balance} setBalance={setBalance} />  
        <Recharge  balance={balance} setBalance={setBalance}/>
      </div>
    </div>
  );
}

export default App;
