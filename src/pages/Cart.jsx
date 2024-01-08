import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import { CartComponent } from "../components/cart/CartComponent";
import WalletIcon from '@mui/icons-material/Wallet';
import { Button } from "@mui/material";
export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount, "cart");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div className="cart-div">
          {carts?.map((cart, index) => (
            <CartComponent key={index} cart={cart}/>
          ))}

          <div className="cart-total">
            <div><WalletIcon fontSize="40px" color="primary"/></div>
             TOTAL : <span>{totalAmount} TL</span> </div>
            <div className="cart-finish">
            <Button variant="contained" color="success">confirm and finish</Button>
            </div>
        </div>
      ) : (
        <div>Sepetinizde ürün bulunmamaktadır</div>
      )}
    </div>
  );
};
