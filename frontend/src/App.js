import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/Home'
import CollapsibleNavbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
      <CollapsibleNavbar/>
        <Routes>
          <Route path="/" element={user ? <Home/> : <Navigate to='login'/>} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to = "/" /> } />
          <Route path="/login" element={!user ? <Login /> : <Navigate to = "/" /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
