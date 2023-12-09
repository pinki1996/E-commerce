
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './Pages/HomePage';
import { CategoryPage } from './Pages/CategoryPage';
import { ProductPage } from './Pages/ProductPage';
import { CartPage } from './Pages/CartPage';
import { LoginPage } from './Pages/LoginPage';
import { Header } from './Components/Header';
import Cart from './Components/Cart';
import { useState } from 'react';

function App() {

  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
     <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Cart isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path='category/:id' element={<CategoryPage/>}></Route>
          <Route path='product/:id' element={<ProductPage/>}></Route>
          <Route path='cart' element={<CartPage/>}></Route>
          <Route path='login' element={<LoginPage/>}></Route>
        </Routes>
    </>
  );
}

export default App;
