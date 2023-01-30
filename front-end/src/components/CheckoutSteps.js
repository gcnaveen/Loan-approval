import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutSteps(props) {
  return (
    <Row
      className="checkout-steps"
      style={{ display: 'flex', paddingLeft: '100px', paddingBottom: '55px' }}
    >
      <Col className={props.step1 ? 'active' : ''}>Personal Information</Col>
      <Col className={props.step2 ? 'active' : ''}>
        Loan Requirement Information
      </Col>
      <Col className={props.step3 ? 'active' : ''}>
        Professional Information
      </Col>
      <Col className={props.step4 ? 'active' : ''}>Existing Loan Details</Col>
      <Col className={props.step5 ? 'active' : ''}>Existing Card Details</Col>
    </Row>
  );
}
// import React from 'react';
// import { Popover, Steps } from 'antd';
// const customDot = (dot, { status, index }) => (
//   <Popover
//     content={
//       <span>
//         step {index} status: {status}
//       </span>
//     }
//   >
//     {dot}
//   </Popover>
// );
// const description = 'You can hover on the dot.';
// const CheckoutSteps = () => (
//   <Steps
//     current={1}
//     progressDot={customDot}
//     items={[
//       {
//         title: 'Finished',
//         description,
//       },
//       {
//         title: 'In Progress',
//         description,
//       },
//       {
//         title: 'Waiting',
//         description,
//       },
//       {
//         title: 'Waiting',
//         description,
//       },
//     ]}
//   />
// );
// export default CheckoutSteps;
