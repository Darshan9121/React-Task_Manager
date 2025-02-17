import logo from './logo.svg';
import './App.css';
import Category from "./components/Cateory"
import Tasks from "./components/Tasks"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (  
    <BrowserRouter basename='React-Task_Manager'>
       <Routes>
       <Route path="/" element={<Home/>} index />
       <Route path="*" element={<h1>Invalid URL...</h1>} />
       </Routes>
      </BrowserRouter>
  );
}

export default App;
