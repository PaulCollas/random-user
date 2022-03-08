import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Likes from './components/pages/Likes'
import Home from './components/pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/likes' element={<Likes/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
