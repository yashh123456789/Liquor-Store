import React from 'react';
import homepageImage from "../../images/wall.jpg";
import '../home/home.css';


export const Home = () => {
  return (

    <section className='banner'>
      <container >
      <div>
      <img  className="banner-home" src={homepageImage} alt="Homepage"/>
      </div> 
                    
                    
        

    </container>

    </section>
    

  )
}
