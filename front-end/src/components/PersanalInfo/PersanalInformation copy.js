import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import CheckoutSteps from '../CheckoutSteps';

export default function PersanalInformation() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  // const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [firstnameBool, setFirstnameBool] = useState(true);
  const [lastnameBool, setLastnameBool] = useState(true);

  const navigate = useNavigate();
  // const handleInputField = () => {
  //   if (!(firstName && lastName)) {
  //   }
  // };
  // console.log(firstnameBool, lastnameBool);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // debugger;
  //   let first = true;
  //   let last = true;
  //   console.log('inside submit');
  //   if (firstName.length) {
  //     setErrMsg('');
  //     first = false;
  //     setFirstnameBool(false);
  //   } else {
  //     setFirstnameBool(true);
  //     first = true;
  //     setErrMsg('This field is required.');
  //   }
  //   if (lastName.length) {
  //     setErrMsg('');
  //     last = false;
  //     setLastnameBool(false);
  //   } else {
  //     setLastnameBool(true);
  //     last = true;
  //     setErrMsg('This field is required.');
  //   }
  //   console.log(firstnameBool, lastnameBool);
  //   if (!(first && last)) {
  //     setErrMsg('');
  //     navigate('/loan-info');
  //   } else {
  //     setErrMsg('This field is required.');
  //   }
  //   // if (firstName.length === 0 || lastName.length === 0) {
  //   //   setError(true);
  //   // } else if (phoneNumber.length !== 10) {
  //   //   setError(true);
  //   // }
  //   // if (firstName && lastName) {
  //   //   console.log(firstName, lastName);
  //   // }
  //   //   navigate('/loan-info');
  // };

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

  const labelStyle = {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
    color: ' #333',
    hyphens: 'manual',
    letterSpacing: 'normal',
    listStyle: 'none',
    outline: 'none',
    position: 'static',
    textDecoration: 'none',
    textIndent: '0',
    textShadow: 'none',
    textTransform: 'none',
    width: 'auto',
    visibility: 'visible',
    overflow: 'visible',
    boxShadow: 'none',
    border: '0',
    verticalAlign: 'middle',
    background: 'none',
    height: 'auto',
    boxSizing: ' border-box',
    display: 'block',
    fontSize: '13px',
    float: 'none',
    fontWeight: '400',
    lineHeight: '1.3',
    margin: ' 4px 0 0',
    padding: '0',
  };

  return (
    <div>
      <CheckoutSteps step1></CheckoutSteps>

      <form style={{ paddingLeft: '100px', paddingRight: '100px' }}>
        {/* <label>Name</label> <br /> */}
        <div>
          <label style={{ fontSize: '17px' }}>
            <b>Name</b> <span class="wpforms-required-label">*</span>
          </label>
          {/* <label>Name</label> <br /> */}
          <div style={{ display: 'flex' }}>
            <input
              style={style}
              required
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label style={labelStyle}>First</label>
            <label style={{ color: 'red' }}>{errMsg}</label>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <input
              required
              style={style}
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label style={labelStyle}>last</label>
            <label style={{ color: 'red' }}>{errMsg}</label>
          </div>
        </div>

        <div style={{ paddingTop: '15px' }}>
          <label style={{ fontSize: '17px' }}>
            <b>Phone</b>
          </label>
          <br />
          <input
            style={style}
            value={phoneNumber}
            type="number"
            id="phone"
            maxLength="10"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
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
            <b>E-mail</b>
          </label>
          <br />
          <input
            style={style}
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label style={{ color: 'red' }}>{errMsg}</label>
        </div>
        <div style={{ display: 'flex', paddingTop: '15px' }}>
          <label>
            <b>City</b>
          </label>
        </div>

        <div style={{ display: 'flex' }}>
          <input
            style={style}
            required
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label style={{ color: 'red' }}>{errMsg}</label>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          <input
            required
            style={style}
            type="number"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />
          <label style={{ color: 'red' }}>{errMsg}</label>
        </div>

        <div>
          <button
            style={{ width: '100px', height: ' 48px' }}
            // onClick={(e) => handleSubmit(e)}
          >
            Next
          </button>
        </div>
        <br />
        <br />
      </form>
    </div>
  );
}
