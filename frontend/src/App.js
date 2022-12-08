import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import CollapsibleNavbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <CollapsibleNavbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
