// import logo from './logo.svg';
import './App.css';
// import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/home/Home';
// import About from './pages/home/About'
// import Contact from './pages/home/contact'
import Dashboard from './Page/Dashboard'
import Orderplacetool from './components/Orderplacetool';
import Home from './Page/home/Home';
import LoginPage from './Page/user/LoginPage';
import Login from './Page/user/Login';
import Register from './Page/user/Register';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/order" element={<Orderplacetool />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
