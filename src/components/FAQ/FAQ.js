import React from 'react';
import './FAQ.css';
import { Link } from 'react-router-dom';







const FAQ = () => {

    


  return (
    <div className="faq-container" id="faq">
        <div className="faq-overlay">
            <div className="faq-header">FREQUENTLY ASKED QUESTIONS</div>
                <div className="faq ">
                    <div className="question-cards">
                        <h3 className='theme-color'><b>DO YOU ACCEPT INSURANCE CLAIMS?</b></h3>
                        <p>YES! We accept all insurance claims.</p>
                    </div>
                    <div className="question-cards">
                        <h3 className='theme-color'><b>CAN YOU HELP WITH MY DEDUCTIBLE?</b></h3>
                        <p>YES! When you file an claim against your own insurance, they will charge you a deductible, usually between $500 - $2000. In most cases, we can waive that fee!  <br />

                        </p>
                    </div>

                    <div className="question-cards">
                        <h3 className='theme-color'><b>DOES THE REPAIR COME WITH A WARRENTY?</b></h3>
                        <p> YES! All our repairs come with a 2 year warranty!</p>
                        <Link to={'/warranty'}><button className="leaseBtn">CLICK HERE TO LEARN MORE!</button></Link>
                    </div>
                </div>
            {/* <div className="question-cards-bottom ">
                <h3 className='theme-color'><b>HOW LONG WILL THE REPAIRS TAKE?</b></h3>
                <p>Most repairs are done the same day, in just a few hours!
                </p>
            </div> */}
            </div>
        </div>
    
  )
}

export default FAQ