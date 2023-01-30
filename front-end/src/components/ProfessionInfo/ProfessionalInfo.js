import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import CheckoutSteps from '../CheckoutSteps';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ProfessionalInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

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

  const onSubmit = async (data) => {
    console.log(data);
    const _data = { ...location.state, data };
    console.log(_data);
    navigate('/exist-loan', { state: { ProfessionalInfo: _data } });
  };

  return (
    <div>
      <CheckoutSteps step3></CheckoutSteps>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ margin: '40px' }}>
        <Form.Field>
          <label style={{ fontSize: '17px', paddingBottom: '10px' }}>
            <b>Occupation</b>{' '}
          </label>
          <select style={style} {...register('occupation')}>
            <option>salary</option>
            <option>self emploied</option>
            <option>business</option>
          </select>
        </Form.Field>
        {errors.loanAmount && (
          <p style={{ color: 'red' }}>Please check the Loan Amount</p>
        )}
        <Form.Field>
          <label>Company Name</label>
          <input
            placeholder="Company Name"
            type="text"
            {...register('companyName', { required: true })}
          />
        </Form.Field>
        {errors.companyName && (
          <p style={{ color: 'red' }}>Please check the Company Name</p>
        )}

        <Button>Next</Button>
      </Form>
    </div>
  );
}
