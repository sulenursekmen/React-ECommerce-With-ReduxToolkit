import { Button } from "@mui/material";
import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Cart } from "../../pages/Cart";

export const CartComponent = ({ cart }) => {
  const dispatch=useDispatch();



  return (
    <div className="cart-component-div">
      <img style={{ width: "150px" }} src={cart?.image} alt="" />

      <div className="cart-component-div-title">{cart?.title}</div>

      <div>
        {cart?.price} TL ({cart?.quantity})
      </div>

      <Button to="/cart" type="submit" onClick={()=>dispatch(removeFromCart(cart?.id))} color="error">Ürünü Sil</Button>
    </div>
  );
};
