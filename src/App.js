import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"

import Profile from "./pages/Profile"
import ForgotPassword from "./pages/ForgotPassword"
import Offers from "./pages/Offers"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIN" element={<SignIn />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
