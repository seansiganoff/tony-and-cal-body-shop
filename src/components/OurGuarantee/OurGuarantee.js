import React from 'react';
import './OurGuarantee.css';

const OurGuarantee = () => {
  return (
    <div className="guarantee-section">
          <div className="guarantee-container" style={{textAlign: 'center'}}>
                <div className='guarantee-banner'>2-Year Limited Warranty</div>
                <div className='guarantee-text'>
                  <b>Warranty Coverage</b><br />
                  Cowboy Collision provides a 2-Year Limited Warranty on all collision repair and refinishing work performed at our facility. This warranty covers:<br />
                  <br />
                  
                  <ul style={{listStyleType: "disc", listStylePosition: "inside"}}>
                    <li>
                    <b>Body and paint repairs</b><br />
                  All bodywork and paint refinishing are guaranteed to be free from defects in workmanship and materials for a period of 24 months from the date of completion.
                  
                    </li>
                  
                  <br /><br />
                  <li>
                  <b>Parts Installation</b><br />
                  OEM or equivalent aftermarket parts are covered under the manufacturer’s warranty. This shop does not warranty parts supplied by the customer.
                  
                  </li>
                 </ul>
                 <br />
                 <b>What Is Not Covered</b><br />
                  This warranty does not cover:
                  <ul style={{listStyleType: "disc", listStylePosition: "inside"}}>
                    <li>
                    Damage caused by misuse, accidents, negligence, or environmental hazards (e.g., acid rain, tree sap, hail)
                    </li>
                    <li>
                    Normal wear and tear, including rock chips, scratches, or rust
                    </li>
Repairs not performed by our shop or unauthorized modifications
                    <li>
Damage resulting from improper maintenance or failure to follow post-repair care instructions

                    </li>
                  </ul>
                 <br />
                  <b>Limitations</b><br />
                  This warranty is non-transferable and applies only to the original customer named on the invoice. It does not cover loss of use, rental costs, or consequential damages.         
                </div>
        </div>
    </div>
  )
}

export default OurGuarantee