import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Layout from './pages/Layout';
import Pages from './pages/Pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/"element={<Layout />}>
                <Route path="/home" element={<Home />}>Home</Route>
                <Route path="aboutus" element={<AboutUs />}>ABOUT US</Route>
                <Route path="pages" element={<Pages />}>PAGES</Route>
                <Route path="contactus" element={<ContactUs />}>CONTACT US</Route>
            </Route>
            </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;

