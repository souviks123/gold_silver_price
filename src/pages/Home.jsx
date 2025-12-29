import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: '📊',
      title: 'Live Rates',
      description: 'Real-time precious metal prices'
    },
    {
      icon: '💰',
      title: 'Gold & Silver',
      description: 'Track gold and silver prices'
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Access anywhere, anytime'
    },
    {
      icon: '🔄',
      title: 'Auto Refresh',
      description: 'Always up-to-date information'
    }
  ];

  return (
    <div className="home-page">
      <div className="home-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-icon">💎</div>
          <h1 className="hero-title">Metal Rates</h1>
          <p className="hero-subtitle">Track Precious Metal Prices</p>
          <p className="hero-description">
            Stay updated with real-time gold and silver rates in INR per gram
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-section">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="cta-section">
          <button 
            className="cta-button"
            onClick={() => navigate('/dashboard')}
          >
            View Dashboard
            <span className="arrow-icon">→</span>
          </button>
        </div>

        {/* Info Cards */}
        <div className="info-cards">
          <div className="info-card gold-card">
            <div className="info-card-icon">🥇</div>
            <div className="info-card-content">
              <h3>Gold</h3>
              <p>Track gold prices per gram</p>
            </div>
          </div>
          <div className="info-card silver-card">
            <div className="info-card-icon">🥈</div>
            <div className="info-card-content">
              <h3>Silver</h3>
              <p>Track silver prices per gram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
