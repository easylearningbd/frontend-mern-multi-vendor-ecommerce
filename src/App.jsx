import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shops from './pages/Shops';
import Card from './pages/Card';
import Shipping from './pages/Shipping';
import Details from './pages/Details';
import Login from './pages/Login';
import Register from './pages/Register';
import { get_category } from './store/reducers/homeReducer';
import { useDispatch} from 'react-redux';
import CategoryShop from './pages/CategoryShop';
import SearchProducts from './pages/SearchProducts';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_category()) 
},[])


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/shops' element={<Shops/>} />
      <Route path='/card' element={<Card/>} />
      <Route path='/shipping' element={<Shipping/>} />
      <Route path='/products?' element={<CategoryShop/>} />
      <Route path='/products/search?' element={<SearchProducts/>} />
      <Route path='/product/details/:slug' element={<Details/>} /> 

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
