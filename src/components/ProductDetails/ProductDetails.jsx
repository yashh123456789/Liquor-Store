import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import "./product-details.css";

const ProductDetails = ({ selectedProduct }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handelAdd = (selectedProduct, quantity) => {
    dispatch(addToCart({ product: selectedProduct, num: quantity }));
    toast.success("Product has been added to cart!");
  };

  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="image-zoom-container">
              <img
                loading="lazy"
                src={selectedProduct?.imgUrl}
                alt={selectedProduct?.productName}
              />
            </div>
          </Col>
          <Col md={6}>
            <h2 style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "24px",
              color: "#333"
            }}>
              {selectedProduct?.productName}
            </h2>
            <div className="info">
              <span className="price">LKR {selectedProduct?.price}</span>
            </div>
            <p>{selectedProduct?.shortDesc}</p>
            <div className="add-to-cart-row">
              <input
                className="qty-input"
                type="number"
                placeholder="Qty"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"  // Ensures quantity can't be below 1
              />
              <button
                aria-label="Add"
                type="submit"
                className="add"
                onClick={() => handelAdd(selectedProduct, quantity)}
              >
                Add To Cart
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
