import React, { useEffect,useState } from "react";
import Navbar from "../components/Nav";
import axios from "axios";
import { Button } from "bootstrap";
import image from '../images/different-gardening-stuff-removebg-preview.png';


export default function Tools() {
  // Define the category as a constant variable
  const category = "Tools";

  const [prods, setProds] = useState([]);

  useEffect(() => {
    // Retrieve the token from local storage when the component mounts
    const tok = localStorage.getItem("token");

    axios
      .get(`http://localhost:8181/api/v1/demo/gget/${category}`, {
        headers: {
          Authorization: `Bearer ${tok}`,
        },
      })
      .then(response => {
        // Handle the response data here, e.g., set it in the component's state
        console.log(response.data);
        setProds(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

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
      console.log("oombu");
    }
  };

  return (
    <>
      <Navbar />
      <div className="g-head" style={{ marginTop: "50px" }}>
        <h1>Garden Tools</h1>
      </div>
      <div className="g-Products" style={{margin:'60px'}}>
            <div className="home-displays">
                      {prods.map(prod => (
                              <div key={prod.p_id} className="temp-card">
                                <img className="grovery" src={image}/>
                                  <h2 className="quote-word">{prod.p_name}</h2>

                                  <p className="author">{prod.details}</p>
                                  <p className="p-price"><strong>Price : </strong>{prod.price}</p>
                                  <button className="g-btn" onClick={() => handleBuy(prod.p_name, prod.details, prod.price)}  >Buy Now</button>
                              </div>

                      ))}
            </div>
            
      </div>
    </>
  );
}
