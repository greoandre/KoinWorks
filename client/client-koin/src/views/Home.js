import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      <div className="productList">
        <Row xs={1} md={4} style={{ justifyContent: "center" }}>
          <ProductCard></ProductCard>
        </Row>
      </div>
    </>
  );
}

export default Home;
