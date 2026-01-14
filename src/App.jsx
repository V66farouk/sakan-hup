import{ BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/signin';
import Profile from './pages/profile';
import SignUp from './pages/signUp';
import About from './pages/about';
     
export default function App() {
  return <BrowserRouter>
  <Routes>
<Route path="/" element={<Home />} />
<Route path="/Sign-In" element={<SignIn />} />
<Route path="/Profile" element={<Profile />} />
<Route path="/SignUp" element={<SignUp />} />
<Route path="/About" element={<About />} />
  </Routes>
  </BrowserRouter>
  
}


