import React, { useState, useEffect } from 'react';
import '../styles/review.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setStatus("Oops! You forgot to write something ✏️");
      return;
    }

    try {
      const res = await fetch('hhttps://ans.shinelord.net//api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("🎉 Yay! Your message is flying to me 💌");
        setMessage('');
        setName('');
        fetchReviews(); 
      } else {
        setStatus(`❌ ${data.error || 'Something went wrong...'}`);
      }
    } catch (err) {
      console.error(err);
      setStatus('🚨 Oops! Server is having a mood swing.');
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await fetch('https://ans.shinelord.net//api/messages');
      const data = await res.json();
      setReviews(data); 
        console.log("Fetched reviews:", data);
    } catch (err) {
      console.error("Failed to load reviews 😵", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date)
      ? '🕐 Unknown time'
      : date.toLocaleString('en-US', {
          weekday: 'short',
          hour: '2-digit',
          minute: '2-digit',
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Got something sweet to tell me? 💬</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Your cute name (optional) 🐣"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contact-input"
        />
        <textarea
          placeholder="Drop your thoughts here 💭✨"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="contact-textarea"
        />
        <button type="submit" className="contact-button">Send it away 🚀</button>
        {status && <p className="contact-status">{status}</p>}
      </form>

      <div className="review-list">
        <h3 className="review-title">💖 What cuties have said:</h3>
        {reviews.length === 0 && <p className="empty-review">No sweet notes yet 🫧</p>}
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <p className="review-message">“{review.message}”</p>
            <p className="review-meta">
              — <strong>{review.name || 'Someone cute 🐾'}</strong> on {formatDate(review.created_at)}
            </p>
            {review.device && (
              <p className="review-device">📱 Sent from: <em>{review.device}</em></p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
