import React from "react";
import Navbar from "./Nav";
import pot from "../images/monstera-plant-black-pot-removebg-preview.png"
import d1 from '../images/details1.jpg';
import d2 from '../images/details2.jpg';
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";


export default function Details(){
    return(
        <>
            <Navbar/>
            <div className="d-cont">
                <div className="d-main">
                    <h1 style={{textAlign:'center', marginTop:'15px',fontWeight:'bolder',marginBottom:'50px'}}>Product Details</h1>
                
                    <div className="d-inside">
                        <div className="d-img">
                            <img className="d-real-img" src={pot}/>
                        </div>
                        <div className="det-div">
                            <h1 className="prod-name" style={{marginBottom:'-10px'}}>monstera-plant-black-pot</h1>
                            <div class="rating">
                                <input type="radio" id="star5" name="rate" value="5"/>
                                <label for="star5" title="text"></label>
                                <input type="radio" id="star4" name="rate" value="4"/>
                                <label for="star4" title="text"></label>
                                <input checked="" type="radio" id="star3" name="rate" value="3"/>
                                <label for="star3" title="text"></label>
                                <input type="radio" id="star2" name="rate" value="2"/>
                                <label for="star2" title="text"></label>
                                <input type="radio" id="star1" name="rate" value="1"/>
                                <label for="star1" title="text"></label>
                            </div>  
                            <hr className="d-line"></hr>
                            <div className="price">
                                <h1>Rs.100</h1>
                                <Link to='/mycart'><Button className="d-btn clr1">Add to cart</Button></Link>
                                <Button className="d-btn clr2">Buy Now</Button>
                            </div>    
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    );
}