import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Food from './components/Food';
import Furniture from './components/Furniture';
import HomeDecoration from './components/HomeDecoration'
import Cart from './components/Cart'
import './App.css';

function App() {
    return(
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/food' element={<Food />}/>
        
            <Route path='/furniture' element={<Furniture />}/>
            <Route path='/homeDecoration' element={<HomeDecoration />}/>
            <Route path='/cart' element={<Cart />}/>
        </Routes>
    </div>
    );
}

export default App;
