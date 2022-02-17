import React, { useEffect } from "react";
import { Navbar, Nav, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartFetch } from "../store/actionCreator/cartAction";

function NavBar() {
  const { product, loading, error } = useSelector(
    (state) => state.cartReducers
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartFetch());
  }, []);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Spinner animation="grow" variant="danger" />;

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link
            to="/"
            style={{
              color: "white",
            }}
          >
            Koin Works
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link eventKey={2} href="">
              <Link
                to="/cart"
                style={{
                  color: "white",
                }}
              >
                <button class="btn btn-outline-light" type="button">
                  <i class="bi-cart-fill me-1"></i>
                  Cart
                  <span class="badge bg-dark text-white ms-1 rounded-pill">
                    {product.countCart}
                  </span>
                </button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
