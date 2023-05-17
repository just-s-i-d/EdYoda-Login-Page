
import './App.scss';
import Features from './components/features/features.component';
import NavBar from './components/navbar/navbar.component';
import PaymentBox from './components/paymentbox/paymentbox.component';

function App() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <Features/>
        <PaymentBox/>
      </div>
    </>
  );
}

export default App;
