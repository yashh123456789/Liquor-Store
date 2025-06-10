import "./slidercard.css";

const SlideCard = ({ title, desc, cover }) => {
  return (
    <div className="slide-item">
      <div 
        className="slide-bg-image" 
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="slide-overlay">
          <div className="slide-text">
            <h2>{title}</h2>
            <p>{desc}</p>
            <a href='shop' className="shop-now-btn">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;