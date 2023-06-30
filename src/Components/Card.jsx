import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useDentistState } from './utils/global.context'


const Card = ({ id, name, username }) => {

  const { favState, favDispatch } = useDentistState();

  const [ isFavorited, setIsFavorited ]  = useState(false);

  const toggleFav = (e) => {
    e.preventDefault();
    if (isFavorited) {
      favDispatch({ type: 'DELETE_FAV', payload: id })
    } else {
      favDispatch({ type: 'ADD_FAV', payload: {id, name, username} })
    }

    setIsFavorited(!isFavorited)
  }

  const isDentistFavorited = favState.some(dentist => dentist.id === id);

  useEffect(() => 
    setIsFavorited(isDentistFavorited)
    , [isDentistFavorited]);

  
  return (
    <div className="card">
      <div>
        <Link style={{textDecoration: 'none'}} to={`/dentist/${id}`}>
          <div>
            <img src={`images/img${id}.png`} alt="dentist" />
          </div>
          <div className="card-data">
            <p className="user">{username}</p>
            <h5 className="name">{name}</h5>
            <p className="info">more details</p>
          </div>
        </Link>
        <div onClick={toggleFav} className="btn-fav"> {isFavorited ? 
          <img className='heart' src='images/solidheart.png' alt='heart'></img> : 
          <img className='heart' src='images/heart.png' alt='heart'></img> }
        </div>
        
      </div>
    </div>
  );
};

export default Card;
