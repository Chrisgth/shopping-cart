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
        <Cart />
        <div className="content">
          <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='' element={<Shop/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
