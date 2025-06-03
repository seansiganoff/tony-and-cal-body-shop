import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import {AnimatePresence, motion} from 'framer-motion';



const Nav = () => {

  const [open, setOpen] = useState(false);

  const isOpen = ()=>{
    setOpen(true);
  }

  const closeMenu = ()=>{
    setOpen(false);
  }

  //lets start animation
  const item={
    exit:{
      opacity:0,
      height:0,
      transition:{
        ease:"easeInOut",
        duration:0.3,
        delay:0
      }
    }
  }






  return (
    
  <div>
    <div className="container">
    <div className='nav-container'>

        <div>

          <Link onClick={closeMenu} to={'/'} ><img className='nav-logo' src={require('../../images/COWBOY COLLISION_logo.avif')} alt='Company Logo' /></Link>
          
        </div>
        {/* <div className='nav-number'>
             <p style={{ color: 'white'}}>CALL <br />214-556-8482</p>
        </div> */}
        
        <div className='sandwich-menu-container' onClick={() => isOpen()}>
          <div className='sandwich-menu'></div>
          <div className='sandwich-menu'></div>
          <div className='sandwich-menu'></div>
        </div>
      </div>
      <AnimatePresence>
        {
          open &&(
            <motion.div className="menu_container"
              variants={item}
              initial={{height:0,opacity:0}}
              animate={{height:"100vh", opacity:1}}
              transition={{duration:.5}}
              exit="exit"
            >
              <div className="close-btn-div">
                <button onClick={closeMenu}>X</button>
              </div>
              <div className='nav-links'>
                <ul>
                <motion.li><Link onClick={closeMenu} to={'/'}
                    initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay: 0}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:0
                        }
                    }}
                  >HOME</Link></motion.li>  
                  
                    

                    <motion.li><Link onClick={closeMenu} to={'/photos'}
                    initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:.0}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:0
                        }
                    }}
                  >PHOTOS</Link></motion.li>   
                  <motion.li><Link onClick={closeMenu} to={'/warranty'}
                    initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay: 0}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:0
                        }
                    }}
                  >2 YEAR WARRANTY</Link></motion.li>  
                  <motion.li><Link onClick={closeMenu} to={'/insurance-claim'}
                    initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay: 0}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:0
                        }
                    }}
                  >INSURANCE CLAIMS</Link></motion.li> 
                  <motion.li><Link onClick={closeMenu} to={'https://g.co/kgs/rdW26hE'}
                    initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay: 0}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:0
                        }
                    }}
                  >GOOGLE REVIEWS</Link></motion.li> 
                </ul>
                
              
              
              
              </div>
            </motion.div>
          )
        }    
      </AnimatePresence>  
      
     
    </div>
  </div>
    
  )
}

export default Nav