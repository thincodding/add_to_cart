import logo from './logo.svg';
import './App.css';
import { Product } from './Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import ProductDetail from './page/ProductDetail';
import HeaderBar from './components/HeaderBar';
import SideBar from './components/SideBar';
import DetailApi from './page/DetailApi';

function App() {
  return (
  <BrowserRouter>
      <HeaderBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
          <Route path='/detail/:id' element={<DetailApi/>}/>
      </Routes>
    <SideBar/>
  </BrowserRouter>
  );
}

export default App;
