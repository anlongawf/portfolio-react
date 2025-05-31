import React from 'react';

export default function Contact() {
  return (
    <div className="container d-flex flex-column justify-content-center mt-5" id="contact">
      <h1 className="contact-title">Contact to me</h1>    
      <form className="d-flex flex-column form-contact">
      <label className="text-white">Email:</label>
      <input  type="text" />
      <label className="text-white">title</label>
      <input type="text" />
      <label className="text-white">desc</label>
      <input type="text" />
    </form>
    </div>
  );
}
