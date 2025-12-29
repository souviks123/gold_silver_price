import React from 'react';
import MetalRateItem from './MetalRateItem';
import './MetalRatesList.css';

function MetalRatesList({ data }) {
  const metals = data?.metals || {};
  const currency = data?.currency || 'INR';
  const unit = data?.unit || 'g';
  const timestamp = data?.timestamp;

  // Always show gold and silver, even if data is not available
  const metalsList = [
    { name: 'gold', price: metals.gold || metals.Gold || null },
    { name: 'silver', price: metals.silver || metals.Silver || null }
  ];

  const formatTimestamp = (ts) => {
    if (!ts) return null;
    const date = new Date(ts * 1000);
    return date.toLocaleString();
  };

  return (
    <>
      <div className="metal-grid">
        {metalsList.map(({ name, price }) => (
          <MetalRateItem
            key={name}
            metal={name}
            price={price}
            currency={currency}
            unit={unit}
          />
        ))}
      </div>

      {timestamp && (
        <div className="timestamp">
          Last updated: {formatTimestamp(timestamp)}
        </div>
      )}
    </>
  );
}

export default MetalRatesList;
