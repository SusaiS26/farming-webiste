import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import Homepage from './Homepage';
import SViewcart from './SViewcart';
import Shop from './Shop';
import Header from './Header';
import Gallery from './Gallery';
import Aboutpage from './Aboutpage';
import Footerpage from './Footerpage';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <cartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path='/SViewcart' element={<SViewcart />} />
            <Route exact path='/Gallery' element={<Gallery />} />
            <Route exact path='/Aboutpage' element={<Aboutpage />} />
            <Route exact path='/Footerpage' element={<Footerpage />} />
            <Route exact path='/Contact' element={<Contact />} />
            <Route exact path='/Login' element={<Login />} />
            <Route exact path='/Signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </cartContext.Provider>
    </div>
  );
}

export default App;
