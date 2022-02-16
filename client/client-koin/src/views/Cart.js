import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import CartCard from "../components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { cartFetch } from "../store/actionCreator/cartAction";

function Cart() {
  const { product, loading, error } = useSelector(
    (state) => state.cartReducers
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartFetch());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

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
