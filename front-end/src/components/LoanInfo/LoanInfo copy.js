import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../CheckoutSteps';

export default function LoanInfo() {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState('');
  const [salary, setSalary] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const style = {
    hyphens: 'manual',
    transition: 'all .3s',
    letterSpacing: 'normal',
    listStyle: 'none',
    outline: 'none',
    position: 'static',
    textDecoration: 'none',
    textIndent: '0',
    textShadow: 'none',
    textTransform: 'none',
    visibility: 'visible',
    overflow: 'visible',
    boxShadow: 'none',
    margin: '0',
    verticalAlign: 'middle',
    background: 'none',
    backgroundColor: '#fff',
    boxSizing: ' border-box',
    borderRadius: ' 2px',
    color: ' #333',
    display: 'block',
    float: 'none',
    fontSize: '16px',
    fontFamily: 'inherit',
    border: '1px solid #ccc',
    padding: '6px 10px',
    height: '38px',
    width: '100%',
    lineHeight: ' 1.3',
  };

  // const handleOver = (e) => {
  //   e.target.value = 0.0;
  // };
  // const handleLeave = (e) => {
  //   e.target.value = null;
  // };
  return (
    <div>
      <CheckoutSteps step2></CheckoutSteps>

      <form style={{ paddingLeft: '100px', paddingRight: '100px' }}>
        <div style={{ paddingTop: '15px' }}>
          <label style={{ fontSize: '17px' }}>
            <b>Loan Amount Required</b>
          </label>
          <br />
          <input
            // onMouseOver={handleOver}
            // onMouseLeave={handleLeave}
            value={loanAmount}
            style={style}
            type="number"
            required
            onChange={(e) => setLoanAmount(e.target.value)}
            // required
          />
          <label style={{ color: 'red' }}>{errMsg}</label>

          {/* <PhoneInput
            // type="number"
            maxLength="10"
            required
            value={phoneNumber}
            onChange={setPhoneNumber}
          /> */}
          {/* {error ? <label>enter valid phone number</label> : ''} */}
          {/* {phoneNumber} */}
        </div>
        <div style={{ paddingTop: '15px' }}>
          <label style={{ fontSize: '17px' }}>
            <b>Net Monthly Salary </b>
          </label>
          <br />
          <input
            value={salary}
            style={style}
            type="number"
            required
            onChange={(e) => setSalary(e.target.value)}
            // onMouseOver={handleOver}
            // onMouseLeave={handleLeave}
          />
          <label style={{ color: 'red' }}>{errMsg}</label>

          {/* <PhoneInput
            // type="number"
            maxLength="10"
            required
            value={phoneNumber}
            onChange={setPhoneNumber}
          /> */}
          {/* {error ? <label>enter valid phone number</label> : ''} */}
          {/* {phoneNumber} */}
        </div>
        <br />
        <button
          style={{ width: '100px', height: ' 48px' }}
          onClick={() => navigate('/professional-info')}
        >
          next
        </button>
        <br />
        <br />
      </form>
      {/* <h1>LoanInfo</h1> */}
    </div>
  );
}
