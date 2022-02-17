import React, { useEffect } from "react";
import { Row, Image } from "react-bootstrap";
import CartCard from "../components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { cartFetch } from "../store/actionCreator/cartAction";
import LoadingScreen from "../components/LoadingScreen";
import ErrorScreen from "../components/ErrorScreen";

function Cart() {
  const { product, loading, error } = useSelector(
    (state) => state.cartReducers
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartFetch());
  }, []);

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;
  if (product.countCart == 0) {
    return (
      <div style={{ marginTop: "30px" }}>
        <Image
          style={{ width: "45%", height: "45%" }}
          src="https://static.vecteezy.com/system/resources/previews/003/047/107/non_2x/web-empty-cart-vector.jpg"
        />
      </div>
    );
  }

  return (
    <>
      <div className="cartList">
        <Row xs={1} md={4} style={{ justifyContent: "center" }}>
          {product.response.map((product) => {
            return <CartCard key={product.id} product={product} />;
          })}
        </Row>
      </div>
    </>
  );
}

export default Cart;
