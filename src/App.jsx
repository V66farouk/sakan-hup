import{ BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Header from './components/Header';
     
export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
<Route path="/" element={<Home />} />
<Route path="/Sign-In" element={<SignIn />} />
<Route path="/Profile" element={<Profile />} />
<Route path="/SignUp" element={<SignUp />} />
<Route path="/About" element={<About />} />
  </Routes>
  </BrowserRouter>
  
}


