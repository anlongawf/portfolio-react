import React from 'react';
import '../styles/donate.css'; 

export default function Donate() {
  return (
    <div className="donate-container">
      <div className="donate-info">
        <img
          src="/images/avatar.png"
          alt="Avatar"
          className="donate-avatar"
        />
        <div className="donate-name">Support My Work</div>
        <div className="donate-job">Freelance Developer</div>
        <p className="donate-bio">
          Creating useful tools & sharing knowledge with the world 💚
        </p>
      </div>

      <div className="donate-content">
        <div className="donate-title">Donate 💖</div>
        <p>
          If you find my projects helpful or inspiring, consider supporting me!<br />
          Your donations help me continue building cool stuff and keep everything open-source.
        </p>
        <div className="donate-qr-box">
          <img
            src="/images/qr_bank.jpg"
            alt="Donate QR Code"
            className="donate-qr"
          />
          <p className="donate-qr-text">
            Scan to donate (Momo / Banking)
          </p>
        </div>
      </div>
    </div>
  );
}
