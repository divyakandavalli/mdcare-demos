import { Routes , Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AboutPage from "./Pages/about";
import Specialization from "./Pages/specilization";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/specificatins" element={<Specialization />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
