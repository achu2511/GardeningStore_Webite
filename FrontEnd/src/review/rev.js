import React, { useState } from 'react';
import './revi.css'; // Make sure to create the updated CSS file for styling
import Navbar from '../components/Nav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ReviewForm = () => {

  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const tok = localStorage.getItem('token');
      const detail = {
        name: formData.name,
        email: formData.email,
        feedbacks: formData.feedback
      };
      const response = await axios.post('http://localhost:8181/api/v1/demo/send', detail, {
        headers: {
          Authorization: `Bearer ${tok}`
        }
      });
      console.log("first");
      console.log("Response:", response);
      alert("Review added Successfully .... ");
      navigate("/home")
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
    <Navbar/>
    <div className="rev-container">
      <h2>Leave Your Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="rev-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="rev-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="rev-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="rev-group">
          <input type="submit"/>
        </div>
      </form>
    </div>
    </>
  );
};

export default ReviewForm;
