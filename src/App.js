import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Likes from './components/pages/Likes';
import Home from './components/pages/Home';
import { createContext } from "react";

export const themes = {
  dark: "",
  light: "white-content",
};

export const ThemeContext = createContext({
    theme: themes.dark,
  changeTheme: () => {},
});

function App() {
  return (
    <div className="todo-app">
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/likes' element={<Likes/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
