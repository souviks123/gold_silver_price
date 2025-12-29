import React from 'react';
import './Settings.css';

function Settings() {
  const settingsOptions = [
    { icon: '🔔', title: 'Notifications', description: 'Manage your alerts' },
    { icon: '💱', title: 'Currency', description: 'Change currency preference' },
    { icon: '🌙', title: 'Dark Mode', description: 'Toggle dark theme' },
    { icon: '📊', title: 'Data Source', description: 'metals.dev API' },
  ];

  return (
    <div className="settings-page">
      <div className="settings-container">
        <div className="page-header">
          <h1>⚙️ Settings</h1>
          <p>Customize your experience</p>
        </div>

        <div className="settings-card">
          <div className="settings-list">
            {settingsOptions.map((option, index) => (
              <div key={index} className="setting-item">
                <div className="setting-icon">{option.icon}</div>
                <div className="setting-content">
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                </div>
                <div className="setting-arrow">›</div>
              </div>
            ))}
          </div>
        </div>

        <div className="app-info">
          <p>Metal Rates App v1.0.0</p>
          <p>Made with ❤️ for tracking precious metals</p>
          <p className="copyright">© 2025 Souvik Mandal. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
