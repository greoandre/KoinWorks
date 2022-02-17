import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProductCart } from "../store/actionCreator/cartAction";

function ProducCard({ product }) {
  const dispatch = useDispatch();

  const handleAddCart = (ProductId) => {
    dispatch(addProductCart(ProductId));
  };

  return (
    <>
      <div class="cards">
        <div class="col-md-3">
          <div class="card-sl">
            <div class="card-image">
              <img src={product.display} />
            </div>
            <div class="card-heading">{product.name}</div>

            <div class="card-text">Rp {product.price}</div>

            <Button
              style={{ marginBottom: "10px", marginTop: "10px" }}
              onClick={() => handleAddCart(product.id)}
              variant="primary"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProducCard;
