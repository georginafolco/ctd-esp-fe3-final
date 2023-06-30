import React, { useEffect } from 'react'
import { useDentistState } from '../Components/utils/global.context'
import { useParams, useNavigate  } from 'react-router-dom'
import axios from 'axios';


const Detail = () => {

  const navigate = useNavigate()
  
  const { dentistState, dentistDispatch } = useDentistState()
  const { id }= useParams()
  const urlDentist = `https://jsonplaceholder.typicode.com/users/${id}`;
  useEffect(() => {
    axios(urlDentist)
    .then(res => dentistDispatch({type: 'GET_DENTIST', payload: res.data}));
  });

  const { name, email, phone, website } = dentistState.dentist
  
  return (
    <>
      <button className='btn-back' onClick={() => navigate(-1)}>
        <img src='/images/back.png' alt="back" className='arrow' />
      </button>

      <div className='contact-card'>
        <p>{name}</p>
        <p>Email: {email}</p>
        <p>Tel: {phone}</p>
        <p>Web: {website}</p>
      </div>
    </>
  )
}

export default Detail