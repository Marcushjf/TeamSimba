import { Fragment} from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import ImageGen from './components/Image';
import ChatBot from './components/ChatBot';

function App() {

  return (
    <BrowserRouter>
    <Fragment>
      <div className='ps-5 pe-5 pt-3'>
        <NavBar/>
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/memories" element={<ImageGen />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>
        </div>
    </Fragment>
    </BrowserRouter>
      
  )
}

export default App
