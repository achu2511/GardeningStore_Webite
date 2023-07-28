import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Rev = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Simulate fetching testimonials from an API or some data source
  useEffect(() => {
    // Sample testimonials data
    const sampleTestimonials = [
      {
        name: "John Doe",
        position: "Web Developer",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        text:
          "I had the pleasure of working with John on a web development project. His skills and attention to detail are unparalleled. He delivered exceptional results in a short timeframe. Highly recommended! He is a true professional.",
      },
      {
        name: "Jane Smith",
        position: "Graphic Designer",
        photo: "https://randomuser.me/api/portraits/women/2.jpg",
        text:
          "Jane is an incredibly talented graphic designer. Her creativity and ability to bring concepts to life are impressive. Working with her was a breeze, and I'm thrilled with the final designs she provided! Her work exceeded my expectations.",
      },
      {
        name: "Alex Johnson",
        position: "Content Writer",
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
        text:
          "Alex is a true wordsmith. His writing style is engaging and captures the essence of the message perfectly. He delivered high-quality content on time and exceeded my expectations. I'll definitely work with him again! Highly recommended.",
      },
      {
        name: "Sarah Lee",
        position: "Marketing Specialist",
        photo: "https://randomuser.me/api/portraits/women/4.jpg",
        text:
          "Sarah is a marketing guru. She has a deep understanding of consumer behavior and helped us devise successful marketing strategies. Her dedication and expertise were evident throughout the project. We're incredibly satisfied with the results!",
      },
      {
        name: "Michael Brown",
        position: "Project Manager",
        photo: "https://randomuser.me/api/portraits/men/5.jpg",
        text:
          "Michael is an exceptional project manager. He has a keen eye for detail and a remarkable ability to keep projects on track. Working with him was a pleasure, and he consistently delivered projects ahead of schedule. I highly recommend him for any project management role.",
      },
      // Add more testimonials here...
    ];

    // Simulate API call or data loading delay
    setTimeout(() => {
      setTestimonials(sampleTestimonials);
    }, 1500); // Simulated delay of 1.5 seconds
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Add a conditional check to handle when testimonials are empty or still loading
  if (testimonials.length === 0) {
    // Return a placeholder or loading message while testimonials are being fetched
    return <div>Loading testimonials...</div>;
  }

  const testimonial = testimonials[index];

  return (
    <>
      <style>
        {`
          .rev-body {
            background-color: #f4f4f4;
            font-family: "Montserrat", sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            overflow: hidden;
            margin: 0;
            padding: 10px;
          }

          .rev-testimonial-container {
            background-color: #476ce4;
            color: #fff;
            border-radius: 15px;
            margin: 20px auto;
            padding: 50px 80px;
            max-width: 768px;
            position: relative;
          }

          .rev-quote {
            color: #fff; /* Set quote color to white */
            font-size: 28px;
            position: absolute;
            top: 40px; /* Adjust the top position for better alignment */
          }

          .rev-quote-left {
            left: 40px;
          }

          .rev-quote-right {
            right: 40px;
          }

          .rev-testimonial {
            line-height: 28px;
            text-align: justify;
            color: #fff; /* Set testimonial text color to white */
            font-size: 18px;
          }

          .rev-user {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .rev-user .rev-user-image {
            border-radius: 50%;
            height: 75px;
            width: 75px;
            object-fit: cover;
            margin-right: 10px;
          }

          .rev-user .rev-user-details {
            display: flex;
            flex-direction: column;
          }

          .rev-user .rev-username {
            margin: 0;
            font-size: 20px;
            font-weight: bold;
          }

          .rev-user .rev-role {
            font-weight: normal;
            margin: 5px 0;
            color: #fff; /* Set role text color to white */
          }

          .rev-progress-bar {
            background-color: #fff;
            height: 4px;
            width: 100%;
            transform-origin: left;
            animation: grow 10s linear infinite;
          }

          @keyframes grow {
            0% {
              transform: scaleX(0);
            }
          }

          @media (max-width: 768px) {
            .rev-testimonial-container {
              padding: 20px 30px;
            }

            .rev-quote {
              display: none;
            }
          }
        `}
      </style>
      <div className="rev-testimonial-container">
        <div className="rev-progress-bar"></div>
        <FontAwesomeIcon icon={faQuoteLeft} className="rev-quote" />
        <FontAwesomeIcon icon={faQuoteRight} className="rev-quote" />
        <p className="rev-testimonial">{testimonial.text}</p>
        <div className="rev-user">
          <img src={testimonial.photo} alt="user" className="rev-user-image" />
          <div className="rev-user-details">
            <h4 className="rev-username">{testimonial.name}</h4>
            <p className="rev-role">{testimonial.position}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rev;
