import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import CheckoutSteps from '../CheckoutSteps';
import axios from 'axios';
import { useLocation } from 'react-router';

// import { useNavigate } from 'react-router-dom';

export default function ExistingCardDetails() {
  // const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let _data = { ...location.state, data };
    console.log(
      _data.LoanDetails.ProfessionalInfo.LoanInfo.PersanalInformation.email
    );
    const config = {
      SecureToken: '91f6e886-7d0d-49b3-a062-0920c480a5e5',
      To: 'sample.test@yopmail.com',
      From: `${_data.LoanDetails.ProfessionalInfo.LoanInfo.PersanalInformation.email}`,
      Subject: `This is the data from ${_data.LoanDetails.ProfessionalInfo.LoanInfo.PersanalInformation.firstName}`,
      Body: { _data },
    };
    console.log('data in front end', data);
    // const postObj = { method: 'Post', body: data };
    // fetch('http://localhost:8888/insertDataToDb', 'post', data)
    //   .then((response) => {
    //     console.log(response);
    //     alert('success!');
    //   })
    //   .catch((err) => {
    //     console.log('error', err);
    //     alert('err');
    //   });
    axios
      .post('http://localhost:8888/insertDataToDb', {
        body: _data,
      })
      .then((res) => {
        console.log(res);
        alert('success');
      })
      .catch((err) => {
        console.log(err);
        alert('error');
      });
    if (window.Email) {
      window.Email.send(config).then(() => alert('email sends successfully'));
    }
  };

  return (
    <div>
      <CheckoutSteps step5></CheckoutSteps>

      <b style={{ margin: '30px', fontSize: '20px' }}>
        Do you use a Credit Card?
      </b>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ margin: '40px' }}>
        <Form.Field>
          <label>Yes</label>
          <input type="radio" value="Yes" {...register('Credit Card')} />
        </Form.Field>
        {errors.value && <p style={{ color: 'red' }}>Please check the value</p>}
        <Form.Field>
          <label>No</label>
          <input type="radio" value="No" {...register('Credit Card')} />
        </Form.Field>
        {errors.value && <p style={{ color: 'red' }}>Please check the value</p>}

        <Button>Submit</Button>
      </Form>
    </div>
  );
}
// MONGODB_URI=mongodb+srv://amazona-mern:Naveen@cluster0.hxyvdlz.mongodb.net/amazona-db?retryWrites=true&w=majority
