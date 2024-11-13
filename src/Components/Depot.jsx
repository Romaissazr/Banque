import React, { useState } from 'react';

function Depot({ balance, setBalance }) {
  const [depositAmount, setDepositAmount] = useState('');

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (amount > 0) {
      setBalance(balance + amount);
      setDepositAmount('');
    } else {
      alert('Invalid deposit amount');
    }
  };

  return (
    <div className="box">
      <h2 className="section-title">Depot</h2>
      <input
        type="number"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
        className="input"
        placeholder="Enter amount"
      />
      <button onClick={handleDeposit} className="button">
        Submit
      </button>
    </div>
  );
}

export default Depot;
