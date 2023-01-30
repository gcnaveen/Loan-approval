import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import CheckoutSteps from '../CheckoutSteps';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function PersanalInformation() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    navigate('/loan-info', { state: { PersanalInformation: data } });
  };
  return (
    <div>
      <CheckoutSteps step1></CheckoutSteps>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ margin: '40px' }}>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            type="text"
            {...register('firstName', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
        </Form.Field>
        {errors.firstName && (
          <p style={{ color: 'red' }}>Please check the First Name</p>
        )}

        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
            {...register('lastName', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
        </Form.Field>
        {errors.lastName && (
          <p style={{ color: 'red' }}>Please check the Last Name</p>
        )}
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </Form.Field>
        {errors.email && <p style={{ color: 'red' }}>Please check the Email</p>}
        {/* <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            {...register('password', {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            })}
          />
        </Form.Field> */}
        {errors.password && (
          <p style={{ color: 'red' }}>Please check the Password</p>
        )}
        <Form.Field>
          <label>Phone Number</label>
          <input
            placeholder="Phone Number"
            type="number"
            {...register('phoneNumber', {
              required: true,
              maxLength: 10,
            })}
          />
        </Form.Field>
        {errors.phoneNumber && (
          <p style={{ color: 'red' }}>Please check the Phone Number</p>
        )}
        <Form.Field>
          <label>City</label>
          <input
            placeholder="City"
            type="text"
            {...register('city', { required: true, pattern: /^[A-Za-z]+$/i })}
          />
          {errors.city && <p style={{ color: 'red' }}>Please check the City</p>}

          <Form.Field>
            <label>Pin Code</label>
            <input
              placeholder="Pin Code"
              type="number"
              {...register('pinCode', { required: true, maxLength: 6 })}
            />
            {errors.pinCode && (
              <p style={{ color: 'red' }}>Please check the pin Code</p>
            )}
          </Form.Field>
        </Form.Field>
        <Button type="submit">Next</Button>
      </Form>
    </div>
  );
}
