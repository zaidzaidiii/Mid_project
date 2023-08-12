import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';
import ProtectedRoute from './Services/ProtectedRoute';
import CategoryPage from './Pages/CategoryPage';
import ProductPage from './Pages/ProductPage';
import CartList from './Components/CartList';
import Page404 from './Pages/Page404';

function App() {
  return (
    <>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/Categories" element={<Home />} />
        <Route path="/CartList" element={<CartList />} />
        <Route path="/products/:productID" element={<ProductPage />} />
        <Route
          path="/products/category/:categoryName"
          element={<CategoryPage />}
        />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
