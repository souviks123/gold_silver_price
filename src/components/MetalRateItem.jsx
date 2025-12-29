import React from 'react';
import './MetalRateItem.css';

function MetalRateItem({ metal, price, currency, unit }) {
  const getCurrencySymbol = (curr) => {
    const symbols = {
      'INR': '₹',
      'USD': '$',
      'EUR': '€',
      'GBP': '£'
    };
    return symbols[curr] || curr;
  };

  const getMetalIcon = (metalName) => {
    const icons = {
      'gold': '🥇',
      'silver': '🥈',
      'platinum': '⚪',
      'palladium': '⚪'
    };
    return icons[metalName.toLowerCase()] || '💎';
  };

  return (
    <div className="metal-item">
      <div className="metal-left">
        <div className="metal-icon">{getMetalIcon(metal)}</div>
        <div>
          <div className="metal-name">{metal}</div>
          <div className="currency">{currency} per {unit}</div>
        </div>
      </div>
      <div className="metal-price">
        {price !== null && price !== undefined 
          ? `${getCurrencySymbol(currency)}${price.toFixed(2)}`
          : 'N/A'
        }
      </div>
    </div>
  );
}

export default MetalRateItem;
