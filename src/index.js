import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer, Navbar } from './components/layouts';
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NoFound';
import Contact from './pages/Contact';
import ProductList from './pages/admin/products/Product-list';
import CreateProduct from './pages/admin/products/CreateProduct'
import EditProduct from './pages/admin/products/EditProduct';
import Pagination from './pages/admin/pagination/Pagination';
function App(){
  return(
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/profile' element={<Pagination/>}/>
      <Route path='/admin/products' element={<ProductList/>}/>
      <Route path='/admin/products/create' element={<CreateProduct/>}/>
      <Route path='/admin/products/edit/:id' element={<EditProduct/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

