import React from 'react';
import './About.css';

const About = () => {
    

   


  return (
    <div className='about-service-container'>
        <div  className="about">
            <div className="about-banner ">ABOUT US</div>
              <p>
                For over 25 years, our family-owned body shop has been proudly serving the community with honest, reliable, and high-quality auto body repair.
                 Built on a foundation of trust and craftsmanship, we treat every vehicle as if it were our own—because to us, every customer is like family. 
                 From minor dents to major collision repairs, our experienced technicians use top-tier equipment and attention to detail to restore your vehicle safely and efficiently. 
                As a local, family-run business, we’re committed to delivering personal service, fair pricing, and lasting results you can count on.
            </p>
        </div>
        <div className='services'>
            <div className="services-banner">OUR SERVICES</div>
            <p>
            At Cowboy Collision, we offer a full range of auto body repair services to get your vehicle looking and performing its best. 
            Our services include: <br /> <br />
             <ul style={{listStyleType: "disc", listStylePosition: "inside"}}>
              <li>Collision Repair</li>
              <li>Dent And Scratch Repair</li>
              <li>Hail Repair</li>
              <li>Frame Straightening</li>
              <li>Professinoal Paint Matching</li>
              <li>Plastic Bumper Repair</li>
              <li>(PDR) Paint-less Dent Repair</li>
              <li>Rust Removal</li>
              <li>Paint Jobs</li>
              <li>Aluminum Repair</li>
            </ul>
 <br /> <br />
            We work with all major insurance providers and offer free estimates to make the process hassle-free. 
            Whether you've been in an accident or just want to restore your vehicle’s appearance, our experienced technicians are here to provide top-quality workmanship and fast, reliable service.
            
           
            
            </p>
        </div>
    </div>
  )
}

export default About