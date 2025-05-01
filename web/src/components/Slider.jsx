import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideCard from "./SliderCard/SlideCard";
import { SliderData } from "../utils/products";

const SliderHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {SliderData.map((value, index) => (
          <SlideCard 
            key={index} 
            title={value.title} 
            cover={value.cover} 
            desc={value.desc} 
          />
        ))}
      </Slider>
    </div>
  );
};

export default SliderHome;