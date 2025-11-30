import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reasons: "",
    requests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message Sent!");
  };

  return (
    <div id="wrapper">
      

      <main>
        <h1>Contact Us</h1>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="text">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your user name . . ."
            />

            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email . . ."
            />
          </div>

          <div className="textarea">
            <label htmlFor="reasons">Reason for Contacting:</label>
            <textarea 
              id="reasons" 
              name="reasons"
              rows="3"
              value={formData.reasons}
              onChange={handleChange}
              placeholder="Web lag . . ."
            ></textarea>

            <label htmlFor="requests">Requests:</label>
            <textarea 
              id="requests" 
              name="requests"
              rows="3"
              value={formData.requests}
              onChange={handleChange}
              placeholder="Improve Web Speed . . ."
            ></textarea>
          </div>

          <button type="submit" href={`mailto:vichekaheng2@gmail.com`}>Send</button>
        </form>
      </main>

      
    </div>
  );
}
