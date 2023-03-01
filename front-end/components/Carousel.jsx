import React from "react";
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
const images = [
  "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg",
  "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg",
  "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () => {
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            height: "100vh",
            backgroundImage: `url(${image})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
       />
      
      ))}
    </Slider>
  );
};

export default Carousel;