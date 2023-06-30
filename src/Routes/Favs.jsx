import React from "react";
import Card from "../Components/Card";
import { useDentistState } from '../Components/utils/global.context'

const Favs = () => {

  const { favState } = useDentistState();

  return (
    <>
      <h1>Favorites Dentists</h1>
      <p className="subtitle">Your Favorite Dentists in One Place</p>
      <div className="card-grid">
        {
          favState.length > 0 ? favState.map(dentist => 
          <Card 
          key={dentist.id}
          id={dentist.id}
          name={dentist.name}
          username={dentist.username}/>) : <p>No agregaste ningún dentista a favoritos.</p>}
      </div>
    </>
  );
};

export default Favs;
