import React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../CheckoutSteps';

export default function ExistingLoanDetails() {
  const navigate = useNavigate();

  return (
    <div>
      <CheckoutSteps step4></CheckoutSteps>
      <form style={{ paddingLeft: '100px', paddingRight: '100px' }}>
        <label style={{ fontSize: '17px' }}>
          <b>Is there any Existing Loan?</b>
          <br /> <br />
          <input type="radio" style={{ paddingTop: '10px' }} />
          &nbsp;
          <label>Yes</label>&nbsp; &nbsp; &nbsp; &nbsp;
          <input type="radio" /> &nbsp;
          <label>No</label>
        </label>
        <br />
        <br />
        <button
          style={{ width: '100px', height: ' 48px' }}
          onClick={() => {
            navigate('/exist-card');
          }}
        >
          next
        </button>
        <br />
        <br />
      </form>
    </div>
  );
}
