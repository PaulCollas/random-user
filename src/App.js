import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Likes from './components/pages/Likes';
import Home from './components/pages/Home';
import AddNew from './components/pages/User';

function App() {
  return (
    <div className="todo-app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/likes' element={<Likes/>} />
          <Route path='/addnew' element={<AddNew/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
