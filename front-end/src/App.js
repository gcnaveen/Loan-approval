import './App.css';
import Container from 'react-bootstrap/Container';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import PersanalInformation from './components/PersanalInformation';
import ProfessionalInfo from './components/ProfessionInfo/ProfessionalInfo';
import ExistingLoanDetails from './components/ExistingLoan/ExistingLoanDetails';
import ExistingCardDetails from './components/ExistingCard/ExistingCardDetails';
import LoanInfo from './components/LoanInfo/LoanInfo';
import PersanalInformation from './components/PersanalInfo/PersanalInformation';

// app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );

function App() {
  return (
    <BrowserRouter>
      <div>
        <header
          style={{
            // paddingLeft: '266px',
            paddingTop: '40px',
            paddingBottom: '107px',
            textAlign: 'center',
          }}
        >
          <img
            src="https://icici.loancrafts.com/wp-content/uploads/2023/01/icici-logo.png"
            alt=""
          />
        </header>
        <div>
          {/* <CheckoutSteps step1 step2 step3 step4 step5></CheckoutSteps> */}
        </div>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<PersanalInformation />} />
              <Route path="/loan-info" element={<LoanInfo />} />
              <Route path="/professional-info" element={<ProfessionalInfo />} />
              <Route path="/exist-loan" element={<ExistingLoanDetails />} />
              <Route path="/exist-card" element={<ExistingCardDetails />} />
            </Routes>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
