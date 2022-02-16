import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addProductCart,
  decreaseProductCart,
  removeProductCart,
} from "../store/actionCreator/cartAction";

function ProducCard({ product }) {
  const dispatch = useDispatch();

  const handleAddCart = (ProductId) => {
    dispatch(addProductCart(ProductId));
  };

  const handleDecreaseCart = (ProductId) => {
    dispatch(decreaseProductCart(ProductId));
  };

  const handleRemoveCart = (ProductId) => {
    dispatch(removeProductCart(ProductId));
  };

  return (
    <>
      <div class="cardsCart">
        <div class="">
          <div class="card-sl">
            <div class="card-image">
              <img src={product.Product.display} />
            </div>
            <div class="card-heading">{product.Product.name}</div>

            <div class="card-text" style={{ marginBottom: "10px" }}>
              Rp {product.Product.price}
            </div>
            <div class="buttonCart">
              <Button
                onClick={() => handleDecreaseCart(product.ProductId)}
                variant="outline-danger"
              >
                -
              </Button>
              <h4 id="textCount">{product.count}</h4>
              <Button
                onClick={() => handleAddCart(product.ProductId)}
                variant="success"
              >
                +
              </Button>
            </div>
            <div>
              <Button
                onClick={() => handleRemoveCart(product.ProductId)}
                style={{ marginBottom: "20px" }}
                variant="danger"
              >
                Delete from Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProducCard;
