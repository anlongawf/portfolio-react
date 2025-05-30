import React, { useEffect, useState } from 'react';

export default function Profiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('/profiles.json')  // vì đặt trong public nên lấy file trực tiếp
      .then(res => res.json()) // lấy body và parse JSON
      .then(data => setProfiles(data)) // lấy dữ liệu JSON rồi gọi setProfiles để cập nhật state profiles với dữ liệu vừa nhận được
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
            </div>
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
