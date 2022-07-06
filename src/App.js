import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/shopping-cart-website" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path="shop" element={<Shop/>}/>
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="*" element={<Home/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
