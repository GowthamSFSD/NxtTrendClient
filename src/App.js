import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import SuccessSignupPage from "./components/SuccessSignupPage";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductItemDetails from "./components/ProductItemDetails";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
// import ProtectedRoute from "./components/ProtectedRoute";
import CartContext from "./context/CartContext";
import "./App.css";

class App extends Component {
  state = {
    cartList: [],
  };

  addCartItem = (product) => {
    this.setState((prevState) => ({
      cartList: [...prevState.cartList, product],
    }));
  };

  deleteCartItem = (id) => {
    this.setState((prevState) => ({
      cartList: prevState.cartList.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { cartList } = this.state;
    return (
      <BrowserRouter>
        <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            deleteCartItem: this.deleteCartItem,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/successSignupPage" element={<SuccessSignupPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductItemDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
