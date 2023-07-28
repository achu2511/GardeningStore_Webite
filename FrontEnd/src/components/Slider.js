
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import african from '../images/african-mask-plant-pot-removebg-preview.png';
import snake from '../images/snake-plant-terracotta-pot-home-decor-removebg-preview.png';
import cala from '../images/calathea-medallion-plant-white-pot-removebg-preview.png';
import monti from '../images/monstera-plant-black-pot-removebg-preview.png';
import {Link} from 'react-router-dom';
const ToolSlider = () => {
  const cardData = [
    { id: 1, title: 'african-mask-plant-pot', imageUrl: african },
    { id: 2, title: 'calathea-medallion-plant-white-pot', imageUrl: cala },
    { id: 3, title: 'monstera-plant-black-pot', imageUrl: monti },
    { id: 3, title: 'snake-plant-terracotta-pot', imageUrl: snake },

{ id: 3, title: 'african-mask-plant-pot', imageUrl: african },
{ id: 1, title: 'calathea-medallion-plant-white-pot', imageUrl: cala },
{ id: 2, title: 'monstera-plant-black-pot', imageUrl: monti },
{ id: 3, title: 'snake-plant-terracotta-pot', imageUrl: snake },

  ];

  const cardsPerFrame = 4; // Number of cards to display in a single frame

  const cardChunks = [];
  for (let i = 0; i < cardData.length; i += cardsPerFrame) {
    cardChunks.push(cardData.slice(i, i + cardsPerFrame));
  }

  return (
    <div className='slide'> 
        <h4 style={{marginTop:'2%',marginLeft:'1%',color:'green',marginBottom:'35px'}}>Garden Plants</h4>
    <Carousel className='slide' interval={null} style={{margin:'1%',cursor:'pointer'}}>
      {cardChunks.map((chunk, index) => (
        <Carousel.Item key={index} >
          <div className="row">
            {chunk.map((card) => (
              <div className="col-md-3" key={card.id}>
                <Link to="/details"><div className="card" style={{width:'90%'}}>
                  <img src={card.imageUrl} style={{height:'350px'}} className="card-img-top" alt="Card" />
                  <div className="card-body" style={{padding:'45px'}}>
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                  </div>
                </div></Link>

              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};

export default ToolSlider;