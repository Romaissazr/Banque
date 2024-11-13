import React, { useState } from 'react';

function Recharge({ balance, setBalance }) {
  const [rechargeAmount, setRechargeAmount] = useState('');
  const [error, setError] = useState('');

  const handleRecharge = () => {
    const amount = parseFloat(rechargeAmount);
    if (amount > 0) {
      setBalance(balance - amount);
      setRechargeAmount('');
      setError('');
    } else {
      setError('Invalid recharge amount');
    }
  };

  return (
    <div className="box">
      <h2 className="section-title">Recharge</h2>
      <input
        type="number"
        value={rechargeAmount}
        onChange={(e) => setRechargeAmount(e.target.value)}
        className="input"
        placeholder="Enter amount"
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleRecharge} className="button">
        Submit
      </button>
    </div>
  );
}

export default Recharge;
