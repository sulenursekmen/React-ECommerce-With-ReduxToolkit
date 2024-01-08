import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
export const DetailComponent = ({ productDetail }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.images[0],
        price:productDetail?.price,
        quantity: quantity,
      })
    );
    window.location.reload();
  };

  const updatedAt = new Date(productDetail.updatedAt);
  // Format the date to "dd.mm.yyyy"
  const formattedDate = `${updatedAt.getDate()}.${
    updatedAt.getMonth() + 1
  }.${updatedAt.getFullYear()}`;
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Özel ürün numarası oluşturan fonksiyon
  const generateProductNumber = (productId) => {
    const fixedPart = "SULLENSSHOP2024";
    return `${fixedPart}${productId}`;
  };

  const [productNumber, setProductNumber] = useState("");

  useEffect(() => {
    // productDetail.id'den ürün numarası oluştur
    if (productDetail.id) {
      const newProductNumber = generateProductNumber(productDetail.id);
      setProductNumber(newProductNumber);
    }
  }, [productDetail]);

  return (
    <div className="product-detail-container">
      <div className="product-detail-slider-div">
        <p className="product-detail-number">Ürün Numarası: {productNumber}</p>
        <Slider {...settings}>
          {productDetail.images && productDetail.images.length > 0 ? (
            // If there are images, map through the array and render img elements
            productDetail.images.map((image, index) => (
              <div key={index} className="product-detail-slider">
                <div className="test">
                  <img
                    className="product-detail-slider-img"
                    src={image}
                    alt=""
                  />
                </div>
              </div>
            ))
          ) : (
            // If there are no images or the images array is empty
            <p>No images available</p>
          )}
        </Slider>
      </div>
      <div className="product-detail-info">
        <h1 className="product-detail-title">{productDetail.title}</h1>
        <p className="product-detail-description">
          {productDetail.description}
        </p>
        <p className="product-detail-date">{formattedDate}</p>
        <p>
          {productDetail.price} <span>₺</span>
        </p>

        <div className="product-detail-add-to-cart">
          <div className="quantity-container">
            <div onClick={decrement} className="decrement">
              -
            </div>
            <input type="text" value={quantity} class="quantity-input" />
            <div onClick={increment} className="increment">
              +
            </div>
          </div>
          <div onClick={addBasket} className="add-to-cart">
            Sepete Ekle
          </div>
        </div>
      </div>
    </div>
  );
};
