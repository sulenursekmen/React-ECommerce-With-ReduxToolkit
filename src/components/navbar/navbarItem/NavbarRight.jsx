import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
export const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const {itemCount} = useSelector(state=>state.carts)

  console.log(itemCount,"carts")

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className="navbar-right-div">
      {/* <div>
        <input type="text" placeholder="Arama Yapınız..." />
        <BiSearch size={25} />
      </div> */}
      <div className="search-box">
        <input type="text" placeholder="search..." />
        <span>
          <BiSearch size={28} />

          {/* style={{ color: 'white' }} */}
        </span>
      </div>

      <AiOutlineHeart size={28} style={{ color: "grey" }} />
      <div onClick={()=>navigate("cart")} className="basket-div">
        <span>{itemCount}</span>
        <SlBasket size={28} style={{ color: "grey" }} />
      </div>
    </div>
  );
};
