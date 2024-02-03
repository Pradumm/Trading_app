// import logo from './logo.svg';
import './App.css';
// import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/home/Home';
// import About from './pages/home/About'
// import Contact from './pages/home/contact'
import Dashboard from './Page/Dashboard'
import Orderplacetool from './components/Orderplacetool';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} /> */}
          <Route path="/" element={<Dashboard/>} />
          <Route path="/order" element={<Orderplacetool/>} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
