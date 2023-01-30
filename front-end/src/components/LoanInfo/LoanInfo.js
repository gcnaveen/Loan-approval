import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import CheckoutSteps from '../CheckoutSteps';
import { useLocation, useNavigate } from 'react-router-dom';

export default function LoanInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location', location.state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log({ ...location.state, data });
    const _data = { ...location.state, data };
    navigate('/professional-info', { state: { LoanInfo: _data } });
  };
  return (
    <div>
      <CheckoutSteps step2></CheckoutSteps>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ margin: '40px' }}>
        <Form.Field>
          <label>Loan Amount</label>
          <input
            placeholder="Loan Amount"
            type="number"
            {...register('loanAmount', { required: true })}
          />
        </Form.Field>
        {errors.loanAmount && (
          <p style={{ color: 'red' }}>Please check the Loan Amount</p>
        )}
        <Form.Field>
          <label>Salary</label>
          <input
            placeholder="Salary"
            type="number"
            {...register('salary', { required: true, maxLength: 10 })}
          />
        </Form.Field>
        {errors.salary && (
          <p style={{ color: 'red' }}>Please check the Salary</p>
        )}

        <Button>Next</Button>
      </Form>
    </div>
  );
}
