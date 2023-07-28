
import './App.css';
import Auth from './components/Auth';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Sell';
import Details from './components/product';
import Cart from './components/cart';
// import Reg from './components/reg';
import Login from './components/Auth';
import Garden from './Shop/Garden';
import Plants from './Shop/Plants';
import Tools from './Shop/Tools';
import Grocery from './Shop/Grocery';
import ReviewForm from './review/rev';
import Search from './components/Search';

function App() {
  return (
    <div  className="pol">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/Sell' element={<Register></Register>}></Route>
        <Route path='/details' element={<Details/>}></Route>
        <Route path='/mycart' element={<Cart/>}></Route>
        <Route path='/garden' element={<Garden/>}></Route>
        <Route path='/plants' element={<Plants/>}></Route>
        <Route path='/tools' element={<Tools/>}></Route>
        <Route path='/grocery' element={<Grocery/>}></Route>
        <Route path='/review' element={<ReviewForm/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        {/* <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Reg/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
