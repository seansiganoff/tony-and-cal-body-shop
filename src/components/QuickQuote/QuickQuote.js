import React from 'react';
import './QuickQuote.css';
import { Link } from 'react-router-dom';

const QuickQuote = () => {
  return (
    <div>
        <div className='quick-quote-container'>
            <div className='quick-quote-banner'>Quick Quote</div>
            
            <h4>The fastest way to get a quote, is to send us some pictures of the damage, via text messaging. Please follow the 3 simple steps:</h4>
              <br />
              <br />
              <p>
             <b> STEP 1. </b>  Send a few pictures via text, of the damage you need repaired to <a href="sms:469-367-2877">469-367-2877.</a> Also, please include the year make and model of the vehicle.
              <br /><br />
              <b> STEP 2. </b>  Wait for us to send you a quote.

              <br /><br />
              <b> STEP 3. </b>  If you are satisfied with the quote and want to proceed with the repairs, let us know and we will setup a date and time that works for you.
            </p>
            <h4>Remember, our work comes with a 100% satisfaction guarantee and a 5 year warranty.</h4><Link to={'/our-guarantee'}><button className="guaranteeBtn">CLICK HERE TO LEARN MORE!</button></Link>
  
        </div>
    </div>
  )
}

export default QuickQuote