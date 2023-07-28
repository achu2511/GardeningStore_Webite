
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import broccoli from '../images/gardening-tools-isolated-removebg-preview.png';
import tomato from '../images/different-gardening-stuff-removebg-preview.png';

import {Link} from 'react-router-dom';
const ToolsSlider = () => {
  const cardData = [
    { id: 1, title: 'Capsicum', imageUrl: tomato },
    { id: 2, title: 'cabbage', imageUrl: broccoli },
    { id: 3, title: 'tomato', imageUrl: tomato },
    { id: 3, title: 'broccoli', imageUrl: broccoli },

{ id: 3, title: 'capsicum', imageUrl: tomato },
{ id: 1, title:  'cabbage' ,imageUrl: broccoli },
{ id: 2, title: 'tomato', imageUrl:tomato },
{ id: 3, title: 'broccoli', imageUrl: broccoli },

  ];

  const cardsPerFrame = 4; // Number of cards to display in a single frame

  const cardChunks = [];
  for (let i = 0; i < cardData.length; i += cardsPerFrame) {
    cardChunks.push(cardData.slice(i, i + cardsPerFrame));
  }

  return (
    <div className='slide'> 
        <h4 style={{marginTop:'2%',marginLeft:'1%',color:'green',marginBottom:'35px'}}>Vegetables</h4>
    <Carousel className='slide' interval={null} style={{margin:'1%',cursor:'pointer'}}>
      {cardChunks.map((chunk, index) => (
        <Carousel.Item key={index} >
          <div className="row">
            {chunk.map((card) => (
              <div className="col-md-3" key={card.id} >
                <Link to="/details"><div className="card bdr" style={{width:'88%'}}>
                  <img src={card.imageUrl} style={{height:'260px'}} className="card-img-top" alt="Card" />
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

export default ToolsSlider;