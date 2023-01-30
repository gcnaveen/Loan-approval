import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import CheckoutSteps from '../CheckoutSteps';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ExistingLoanDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const _data = { ...location.state, data };
    console.log(_data);
    navigate('/exist-card', { state: { LoanDetails: _data } });
  };
  return (
    <div>
      <CheckoutSteps step4></CheckoutSteps>
      <b style={{ margin: '30px', fontSize: '20px' }}>
        Is there any Existing Loan?
      </b>
      <Form onSubmit={handleSubmit(onSubmit)} style={{ margin: '40px' }}>
        <Form.Field>
          <label>Yes</label>
          <input type="radio" value="Yes" {...register('Existing Loan')} />
        </Form.Field>
        {errors.value && <p style={{ color: 'red' }}>Please check the value</p>}
        <Form.Field>
          <label>No</label>
          <input type="radio" value="No" {...register('Existing Loan')} />
        </Form.Field>
        {errors.value && <p style={{ color: 'red' }}>Please check the value</p>}

        <Button>Next</Button>
      </Form>
    </div>
  );
}
