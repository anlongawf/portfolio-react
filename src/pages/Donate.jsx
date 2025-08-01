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
            src="https://cdn.discordapp.com/attachments/1261785923239018589/1400641030419779614/IMG_6606.jpg?ex=688d601c&is=688c0e9c&hm=365afd1e0e8bb453c9dff88789c2a646136cd3b59f98304af55c3d476fec97e4&"
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
