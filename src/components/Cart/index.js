import React from "react";
import Header from "../Header";
import CartListView from "../CartListView";
import EmptyCartView from "../EmptyCartView";
import { useSelector } from "react-redux";
import { selectAllCart } from "../../slice/cartSlice";

const Cart = () => {
const cartList = useSelector(selectAllCart)

  // useEffect(() => {
  //   const jwtToken = Cookies.get("jwt_token");
  //   if (jwtToken === undefined) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  const showEmptyView = cartList.length === 0;

  return (
    <>
      <Header />
      <div className="cart-container">
        {showEmptyView ? (
          <EmptyCartView />
        ) : (
          <div className="cart-content-container">
            <h1 className="cart-heading">My Cart</h1>
            <CartListView />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
