import React from 'react';
import './Favorites.css';

function Favorites() {
  return (
    <div className="favorites-page">
      <div className="favorites-container">
        <div className="page-header">
          <h1>⭐ Favorites</h1>
          <p>Your saved metal rates</p>
        </div>

        <div className="empty-state">
          <div className="empty-icon">📌</div>
          <h2>No Favorites Yet</h2>
          <p>Save your favorite metal rates to track them easily</p>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
