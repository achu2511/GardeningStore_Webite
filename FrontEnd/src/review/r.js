import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Rev = () => {
  const [achTestimonials, setAchTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials from an API or some data source
    const tok = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/get", {
        headers: {
          Authorization: `Bearer ${tok}`,
        },
      })
      .then(response => {
        console.log(response.data);
        setAchTestimonials(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAchIndex(prevIndex => (prevIndex + 1) % achTestimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [achTestimonials.length]);

  const [achIndex, setAchIndex] = useState(0);

  // Add a conditional check to handle when testimonials are empty or still loading
  if (achTestimonials.length === 0) {
    // Return a placeholder or loading message while testimonials are being fetched
    return <div>Loading testimonials...</div>;
  }

  const achTestimonial = achTestimonials[achIndex];

  // Default image URL in case `photo` field is missing
  const defaultImageURL = "URL_TO_DEFAULT_IMAGE";

  // Default position in case `position` field is missing
  const defaultPosition = "Default Position";

  return (
    <div className="ach-rev-testimonial-container">
      <div className="ach-rev-progress-bar"></div>
      <FontAwesomeIcon icon={faQuoteLeft} className="ach-rev-quote ach-rev-quote-left" />
      <p className="ach-rev-testimonial oob">{achTestimonial.feedbacks}</p>
      <FontAwesomeIcon icon={faQuoteRight} className="ach-rev-quote ach-rev-quote-right" />
      <div className="ach-rev-user">
        {/* <img
          src={achTestimonial.photo || defaultImageURL}
          alt="user"
          className="ach-rev-user-image"
        /> */}
        <div className="ach-rev-user-details">
          <h4 className="ach-rev-username" style={{fontSize:'40px',marginTop:'35px'}}>- {achTestimonial.name}</h4>
          {/* <p className="ach-rev-role">{achTestimonial.position || defaultPosition}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Rev;
