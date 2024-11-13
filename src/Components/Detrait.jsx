import React, { useState } from 'react';

function Detrait({ balance, setBalance }) {
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (amount > 0 && amount <= balance) {
      setBalance(balance - amount);
      setWithdrawAmount('');
    } else {
      alert('Invalid withdraw amount');
    }
  };

  return (
    <div className="box">
      <h2 className="section-title">Retrait</h2>
      <input
        type="number"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.value)}
        className="input"
        placeholder="Enter amount"
      />
      <button onClick={handleWithdraw} className="button">
        Submit
      </button>
    </div>
  );
}

export default Detrait;
