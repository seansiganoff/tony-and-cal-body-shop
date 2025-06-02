import React from 'react'
import './home.css';
import About from '../About/About';
import FAQ from '../FAQ/FAQ';



// import { motion } from 'framer-motion';

const Home = () => {

  //Animates the vehicle icons when the page loads.
  // const visible = { opacity: 1, x: 0, transition: { duration: 0.4 } };
  //   const itemVariants = {
  //     hidden: { opacity: 0, x: -710 },
  //     visible
  //   };


  

  return (
    
    <div className='header'>
      <div className='header-overlay'>
        <img className="company-logo" src={require('../../images/tonyandcal-shoppic-resized.JPG')} alt='Company Logo' />
        <div className="locations"><b className='theme-color'>ADDRESS:</b><a href={"https://maps.app.goo.gl/14SfuiTSpSbwV96Y6"} target="_blank" rel="noopener noreferrer">
      925 22nd St unit 116, Plano, TX 75074.
    </a> </div>

        <a href={"https://maps.app.goo.gl/14SfuiTSpSbwV96Y6"} target="_blank" rel="noopener noreferrer">
      925 22nd St unit 116, Plano, TX 75074.
    </a>
        <br />
        <div>
        
      </div>
      </div>
      {<About />}
      {<FAQ />}
      {/* {<Why />} */}
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107071.38448864216!2d-96.79577415170237!3d33.00428258390039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c15ff791ad505%3A0x5e571339f56ee2b4!2sCowboy%20Collision!5e0!3m2!1sen!2sus!4v1748901173126!5m2!1sen!2sus"
        width="100%" 
        height="650" 
        allowFullScreen="" 
        loading="lazy" 
        style={{ border: "0"}}
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
  )
}

export default Home

