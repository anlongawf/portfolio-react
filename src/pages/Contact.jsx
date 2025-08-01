import React from 'react';

export default function Contact() {
  const green = '#00ff88';

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" id="contact">
      <h1 style={{fontWeight: 'bold' }} className="contact-title">Contact Me</h1>
      <p className="text-white fs-5 text-center mt-1 mb-2" style={{ maxWidth: '500px' }}>
        Feel free to reach out to me through any of the following:
      </p>

      <ul className="list-unstyled text-center" style={{ color: 'white', fontSize: '1.2rem' }}>
        <li className="mb-2">
          📧 Email:&nbsp;
          <a href="mailto:anan123456a123@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
            anan123456a123@gmail.com
          </a>
        </li>
        <li className="mb-2">
          💬 Facebook:&nbsp;
          <a href="https://www.facebook.com/anphanhunter" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            anphanhunter
          </a>
        </li>
        <li className="mb-2">
          🎮 Discord:&nbsp;
          <span style={{ color: 'white' }}>an_baria</span>
        </li>
      </ul>
    </div>
  );
}
