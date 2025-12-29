import React from 'react';
import MetalRateItem from './MetalRateItem';
import './MetalRatesList.css';

function MetalRatesList({ data }) {
  const metals = data?.metals || {};
  const currency = data?.currency || 'INR';
  const unit = data?.unit || 'g';
  const timestamp = data?.timestamp;

  // Function to find metal price regardless of case
  const getMetalPrice = (metalName) => {
    if (!metals) return null;
    
    // Check all possible variations
    const variations = [
      metalName.toLowerCase(),
      metalName.toUpperCase(),
      metalName.charAt(0).toUpperCase() + metalName.slice(1).toLowerCase()
    ];
    
    for (const key of Object.keys(metals)) {
      if (variations.some(v => key.toLowerCase() === v.toLowerCase())) {
        return metals[key];
      }
    }
    return null;
  };

  // Always show gold and silver, even if data is not available
  const metalsList = [
    { name: 'Gold', price: getMetalPrice('gold') },
    { name: 'Silver', price: getMetalPrice('silver') }
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
