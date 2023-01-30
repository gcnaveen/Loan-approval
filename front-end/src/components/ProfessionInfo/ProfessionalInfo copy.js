import React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../CheckoutSteps';

export default function ProfessionalInfo() {
  const navigate = useNavigate();
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

  return (
    <div>
      <CheckoutSteps step3></CheckoutSteps>
      <form style={{ paddingLeft: '100px', paddingRight: '100px' }}>
        <label style={{ fontSize: '17px', paddingBottom: '10px' }}>
          <b>Occupation</b>{' '}
        </label>
        <select style={style}>
          <option>salary</option>
          <option>self emploied</option>
          <option>business</option>
        </select>

        <div style={{ paddingTop: '15px' }}>
          <label style={{ fontSize: '17px' }}>
            <b>Company Name </b>
          </label>
          <br />
          <input style={style} type="text" required />
        </div>

        <br />
        <button
          style={{ width: '100px', height: ' 48px' }}
          onClick={() => {
            navigate('/exist-loan');
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
