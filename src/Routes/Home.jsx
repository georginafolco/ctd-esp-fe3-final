import React from 'react'
import Card from '../Components/Card'
import { useDentistState } from '../Components/utils/global.context'


const Home = () => {
  
  const { dentistState } = useDentistState();
  
  return (
    <main>
      <h1>Dental Professionals</h1>
      <p className='subtitle'>Meet the Experts Committed to Your Smile</p>
      <div className='card-grid'>
        {dentistState.data.map(dentist => 
        <Card 
        key={dentist.id}
        id={dentist.id}
        name={dentist.name}
        username={dentist.username}/>)}
      </div>
    </main>
  )
}

export default Home

