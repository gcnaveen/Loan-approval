import React from 'react';
import CheckoutSteps from '../CheckoutSteps';

export default function ExistingCardDetails() {
  return (
    <div>
      <div style={{ itemAlign: 'center' }}>
        <CheckoutSteps step5></CheckoutSteps>
      </div>

      <div>
        <form style={{ paddingLeft: '100px', paddingRight: '100px' }}>
          <label style={{ fontSize: '17px' }}>
            <b>Do you use a Credit Card?</b>
            <br /> <br />
            <input type="radio" style={{ paddingTop: '10px' }} />
            &nbsp;
            <label>Yes</label>&nbsp; &nbsp; &nbsp; &nbsp;
            <input type="radio" /> &nbsp;
            <label>No</label>
          </label>
          <br />
          <br />
          <button style={{ width: '100px', height: ' 48px' }}>Submit</button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}
