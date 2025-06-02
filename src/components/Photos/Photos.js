import React from 'react';
import './Photos.css';

const Photos = () => {



  return (
    <div className='photos-container'>
        <h2 className='photo-gallery-banner'>GALLERY</h2>
        
        <div className='project-container'>
          <h2>2024 Chevy Silverado</h2>
            <img className='project-img' alt='silverado' src={require('../../images/silverado_1.jpg')} />
            <img className='project-img' alt='silverado' src={require('../../images/silverado_2.jpg')} />
            <img className='project-img' alt='silverado' src={require('../../images/silverado_3.jpg')} />
            <img className='project-img' alt='silverado' src={require('../../images/silverado_4.jpg')} />
            <img className='project-img' alt='silverado' src={require('../../images/silverado_5.jpg')} />
            <img className='project-img' alt='silverado' src={require('../../images/silverado_6.jpg')} />
            <img className='project-img' alt='silverado' src={require('../../images/silverado_7.jpg')} />
        </div>
        <hr />
        
          <h2>More photos and videos coming soon!</h2>
            
    </div>
  )
}

export default Photos