import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { productFetch } from "../store/actionCreator/productAction";
import LoadingScreen from "../components/LoadingScreen";
import ErrorScreen from "../components/ErrorScreen";

function Home() {
  const { product, loading, error } = useSelector(
    (state) => state.productReducers
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productFetch());
  }, []);

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  return (
    <>
      <div className="productList">
        <Row xs={1} md={4} style={{ justifyContent: "center" }}>
          {product.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </Row>
      </div>
    </>
  );
}

export default Home;
