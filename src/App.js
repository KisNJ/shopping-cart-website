import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Shop from './components/Shop';
function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path="shop" element={<Shop/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
