import { Button } from "@mui/material";
import React from "react";
import Slider from "react-slick";
export const SliderCompanies = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item-div">
          <div>
            {/* <div>En Kaliteli çantalar</div> */}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              necessitatibus eaque, dolorum, voluptas ipsum eligendi, soluta
              sapiente debitis corrupti expedita aliquam. Officiis vel
              consectetur quis voluptas eos aperiam iure inventore.
            </div>
            <div className="slider-button-div">
              <Button variant="outlined" size="small" color="primary">
                İncele
              </Button>
            </div>
          </div>
          <img
            className="slider-img"
            src="https://img2-twist.mncdn.com/mnresize/1200/-//Twist/products/FW2324/Stillife/TW6230052110070.JPG"
            alt=""
          />
        </div>

        <div className="slider-item-div">
          <div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              necessitatibus eaque, dolorum, voluptas ipsum eligendi, soluta
              sapiente debitis corrupti expedita aliquam. Officiis vel
              consectetur quis voluptas eos aperiam iure inventore.
            </div>
            <div className="slider-button-div">
              <Button variant="outlined" size="small" color="primary">
                İncele
              </Button>
            </div>
          </div>
          <img
            className="slider-img"
            src="https://img2-twist.mncdn.com/mnresize/1200/-//Twist/products/FW2324/Stillife/TW6230052026035.JPG"
            alt=""
          />
        </div>

        <div className="slider-item-div">
          <div>
            {/* <div>En Kaliteli çantalar</div> */}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              necessitatibus eaque, dolorum, voluptas ipsum eligendi, soluta
              sapiente debitis corrupti expedita aliquam. Officiis vel
              consectetur quis voluptas eos aperiam iure inventore.
            </div>
            <div className="slider-button-div">
              <Button variant="outlined" size="small" color="primary">
                İncele
              </Button>
            </div>
          </div>
          <img
            className="slider-img"
            src="https://img2-twist.mncdn.com/mnresize/300/-//Twist/products/FW2324/Stillife/TW6230052050127.JPG"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};
