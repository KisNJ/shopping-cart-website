import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import shp_cart from "../images/shopping_cart_checkout.svg";
function Navbar() {
  return (
    <main>
      <nav>
        <div id="top">
          <header>PC SHOP</header>
          <div className="nav-links">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="shop">SHOP</NavLink>
            <NavLink to="checkout">
              <img src={shp_cart} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="wave"></div>
      </nav>
        <Outlet />
    </main>
  );
}

export default Navbar;
