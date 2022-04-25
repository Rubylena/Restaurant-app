import React from 'react';
import './home.css';
import foodb from './img/foodb.png'

const Home = () => {
  return (
    <div className='home_container'>
      <div className='home_row_1'>
        <div className="home_r1 home_r1_text">
          <h1><i>La Dope Delish</i></h1>
          <h2>Let's get you satisfied...</h2>
          <button>MAKE RESERVATION</button>
        </div>
        <div className="home_r1 home_r1_image">
          <img src={foodb} alt='food'/>
        </div>
      </div>
    </div>
  )
}

export default Home;
