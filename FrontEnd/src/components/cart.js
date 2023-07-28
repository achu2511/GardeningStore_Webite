import React, { useState } from "react";
import Navbar from "./Nav";
import plant1 from "../images/african-mask-plant-pot-removebg-preview.png";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";

export default function Cart(){

    const[prods,setProds]=useState([]);
    const[total,setTotal]=useState(0);

    useEffect(() => {


        
        const tok = localStorage.getItem("token");
        const email = localStorage.getItem('email');
        axios
          .get(`http://localhost:8181/api/v1/demo/get/mycart/${email}`, {
            headers: {
              Authorization: `Bearer ${tok}`,
            },
          })
          .then(response => {
            // console.log(response.data);
            setProds(response.data);
          })
          .catch(error => {
            console.log(error);
          });

          axios
          .get(`http://localhost:8181/api/v1/demo/get/total/${email}`, {
            headers: {
              Authorization: `Bearer ${tok}`,
            },
          })
          .then(response => {
            // console.log("otha");
            // console.log(response.data);
            // setProds(response.data);
            setTotal(response.data);
            
          })
          .catch(error => {
            console.log(error);
          });



      }, []);

      const Delete =(id)=>{
        const tok = localStorage.getItem("token");
        // console.log(id);
        // console.log("oombu");
          axios
          .delete(`http://localhost:8181/api/v1/demo/del/${id}`, {
            headers: {
              Authorization: `Bearer ${tok}`,
            },
          })
          .then(response => {
            console.log(response);
            console.log(response.data);
            // setProds(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }

    return(
        <>
            <Navbar/>
            <div className="cart-cont">
                <div className="cart-in">
                    <h1 style={{textAlign:'center',fontWeight:'bolder',marginTop:'25px',marginBottom:'20px'}}>Your Cart</h1>
                    <div className="p-card-cont">
                    {prods.map(prod =>(
                        <div className="p-card">
                            <img className="plants" src={plant1}/>
                            <div className="c-details">
                                <h2 className="c-txt">{prod.p_name}</h2>
                                <h2 className="c-txt loa"><strong>Price: </strong>{prod.price}</h2>
                                <Button className="c-btn" onClick={()=>{Delete(prod.cart_id);window.location.reload()}}>REMOVE</Button>
                            </div>
                        </div>                        
                    ))}
                    </div>
                    <div className="ttl-cont">
                        <div className="ttl">
                            <h1 className="ttl-txt"><strong>MRP :</strong> {total}</h1>
                            {/* <h1 className="ttl-txt"><strong>Discount :</strong> 10%</h1> */}
                            <h1 className="ttl-txt"><strong>GST :</strong> 39.3</h1>
                            <h1 className="ttl-txt"><strong>Total Amount :</strong>{total+39.3}</h1>
                            <Button>Confirm Order</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}