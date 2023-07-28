import React from "react";
import Navbar from "../components/Nav";
import plant from "../images/hanging-pothos-plant-gray-removebg-preview.png";
import semi from "../images/half-circle.png";
import ToolSlider from "../components/Slider";
import VegSlider from "../components/Vege";
import ToolsSlider from "../components/Tools";
import axios from "axios";
import adv from '../images/adv.png';
import { useEffect } from "react";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Footer from "../components/footer";
import Rev from "../review/cour";
import { Link } from "react-router-dom";
import { useState } from "react";
import Re from "../review/r";
import GardenCarousel from "../components/deal";
import TopPicks from "../components/deal";

function Home() {
    const [name,setName]=useState('');
    localStorage.setItem('name',name);
    
    


    return (
      <>
        <Navbar/>
        <div className="h-cont">
            <TopPicks/>
            <div className="h-search">
                <div className="h-search-box">
                    <div className="h-search-quote">
                        <p className="o-t" style={{color:'black'}}>
                            Loved by gardens 
                        </p>
                        <p className="o-t"  style={{color:'black'}}>
                            Trusted by gardeners 
                        </p>
                        <br></br>
                        <p className="t-t" style={{color:'black'}}>
                            Green Seed is the perfect way to realise your dream garden 
                        </p>
                        <p className="t-t" style={{color:'black'}}>
                            area and help you to take care of it from seed to a real plant 
                        </p>
                        <div class="search">
                            <input placeholder="Search..." type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                            <Link to="/search"><button type="submit">Go</button></Link>
                        </div>
                    </div>
                    <div>
                        <img className="home-plant1" src={plant}/>
                    </div>
                </div>
            </div>
            <div className="po-main">
                <div className="po-cont">
                    <h1 className="head-category"><strong>Shop By Category</strong> </h1>
                    <Link to="/garden"><div className="Veges klkl">
                        {/* <ToolSlider/> */}
                        <h1>Garden Decor</h1>
                    </div></Link>
                    <Link to="/Plants"><div className="Veges">
                        {/* <VegSlider/> */}
                        <h1>Plants</h1>
                    </div></Link>
                    <Link to="/tools"><div className="Veges">
                        {/* <ToolsSlider/> */}
                        <h1>Tools</h1>
                    </div></Link>
                    <Link to="/grocery"><div className="Veges">
                        {/* <ToolsSlider/> */}
                        <h1>Grocery</h1>
                    </div></Link>
                </div>
            </div>
            <div>
                <img src={adv} style={{width:'100%'}}/>
            </div>

            <div className="rev-cont">
                <div className="reviews loafer">
                    <h1 style={{textAlign:'center',marginTop:'-80px',marginBottom:'50px',fontSize:'45px',color:'black'}}><strong>Hear What People Say About us ..</strong></h1>
                    {/* <Rev className="rev-home"/> */}
                    <Re/>
                </div>
            </div>
            <div style={{backgroundColor:'green'}}>
                <Footer/>
            </div>
        </div>
      </>
    );
  }
  
export default Home;