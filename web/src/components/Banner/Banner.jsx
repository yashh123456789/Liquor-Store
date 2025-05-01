import productBg from "../../Images/table.jpg";
import "./banner.css";

const Banner = () => {  // Destructure selectedProduct prop
    return ( 
        <div className="image-container">
            <img src={productBg} alt="Product-bg" />
            <div className="overlay">
            </div>
        </div>
    );
}

export default Banner;