import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import BillingPage from './Pages/BillingPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/billingpage" element={<BillingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
