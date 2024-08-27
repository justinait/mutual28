import '@fontsource-variable/libre-franklin';
import '@fontsource/viaoda-libre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import CheckScroll from './CheckScroll';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CheckScroll/>
      <Routes className='appRoutes'>

        <Route path='/' element={< Home />} />
        <Route path='/about' element={< About />} />
        {/* <Route path='/about' element={< About />} /> */}
        <Route path='/about' element={< Contact />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
