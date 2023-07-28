import React, { useEffect, useState } from "react";
import Navbar from "../components/Nav";
import axios from "axios";
import { Button } from "react-bootstrap";
import image from '../images/snake-plant-terracotta-pot-home-decor-removebg-preview.png';

export default function Garden() {
  const category = "Decor";
  const [prods, setProds] = useState([]);

  useEffect(() => {
    const tok = localStorage.getItem("token");
    axios
      .get(`http://localhost:8181/api/v1/demo/gget/${category}`, {
        headers: {
          Authorization: `Bearer ${tok}`,
        },
      })
      .then(response => {
        console.log(response.data);
        setProds(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleBuy = async (name, details, price) => {
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    const det = {
      email: email,
      p_name: name,
      details: details,
      price: price,
      category: category
    };
    try {
      const response = await axios.post("http://localhost:8181/api/v1/demo/post/Cart", det, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("succsessful");
      // Handle the response if needed
    } catch (error) {
      console.error("Error: ", error);
      // alert("Username/Password is Incorrect, If Not Registered Please");
    }
  };

  return (
    <>
      <Navbar />
      <div className="g-head" style={{ marginTop: "50px" }}>
        <h1>Garden Decor</h1>
      </div>
      <div className="template">

      
      <div className="g-Products" style={{ margin: '60px' }}>
        <div className="home-displays">
          {prods.map(prod => (
            <div key={prod.p_id} className="temp-card">
              <img className="groverys" src={image} alt="Product" />
              <h2 className="quote-word">{prod.p_name}</h2>
              <p className="author">{prod.details}</p>
              <p className="p-price"><strong>Price : </strong>{prod.price}</p>
              <Button className="g-btn" onClick={() => handleBuy(prod.p_name, prod.details, prod.price)}>Buy Now</Button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
