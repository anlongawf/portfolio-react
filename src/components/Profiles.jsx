import React, { useEffect, useState } from 'react';

export default function Profiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('/profiles.json')
      .then(res => res.json())
      .then(data => setProfiles(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="container mt-5">
      {profiles.map(profile => (
        <div className="row mb-4" key={profile.id}>
          <div className="col-md-4">
            <div className="infor">
              <img src={profile.avatar} alt={`Avatar of ${profile.name}`} className="avatar" />
              <p className="name">{profile.name}</p>
              <span className="job">{profile.job}</span>
              <div className="bio">{profile.bio}</div>
              <div className="social-icons d-flex mt-3 justify-content-center">
                <a href="https://facebook.com/yourprofile" className="social facebook mx-2" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/yourprofile" className="social instagram mx-2" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
                <a href="https://github.com/yourusername" className="social github mx-2" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div> {/* Đóng infor */}
          </div>
          <div className="col-md-8">
            <div className="content-box">
              <p className="desc">{profile.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
