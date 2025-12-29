import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchMetalRates } from '../services/metalApi';
import MetalRatesList from '../components/MetalRatesList';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [metalData, setMetalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadMetalRates = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchMetalRates('INR', 'g');
      setMetalData(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch metal rates');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMetalRates();
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <div className="header-content">
            <h1>💎 Metal Rates</h1>
            <p>Live Prices Dashboard</p>
          </div>
          <button className="refresh-icon-btn" onClick={loadMetalRates} disabled={loading}>
            <span className={loading ? 'rotating' : ''}>🔄</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="stats-cards">
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <h3>INR/gram</h3>
              <p>Indian Rupee</p>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="content-card">
          <div className="card-header">
            <h2>Current Rates</h2>
            <div className="currency-badge">INR per gram</div>
          </div>

          {loading && (
            <div className="loading">
              <div className="spinner"></div>
              <div>Fetching latest rates...</div>
            </div>
          )}

          {error && (
            <div className="error">
              ⚠️ {error}
            </div>
          )}

          {!loading && !error && metalData && (
            <MetalRatesList data={metalData} />
          )}

          {!loading && !error && !metalData && (
            <MetalRatesList data={null} />
          )}
        </div>

        {/* Info Section */}
        <div className="info-section">
          <div className="info-item">
            <span className="info-icon">ℹ️</span>
            <span>Rates are updated in real-time from metals.dev API</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
