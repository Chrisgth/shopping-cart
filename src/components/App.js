import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Cart from './Cart';
import Home from './Home';
import Navbar from './Navbar';
import Shop from './Shop';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/shopping-cart" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
