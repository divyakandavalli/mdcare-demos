import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Features from './Pages/Features';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
