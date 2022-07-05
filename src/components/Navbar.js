import React, { useState, createContext } from "react";
import { Outlet, NavLink,useResolvedPath } from "react-router-dom";
import shp_cart from "../images/shopping_cart_checkout.svg";
import { matchRoutes, useLocation } from "react-router-dom"
function Navbar() {
  const [buyingThese, setBuyingThese] = useState([]);
  function addToBuyingThese(item) {
    console.log("run");
  }
  let activeStyle = {
    color: "red",
  };

const routes = [{ path: "/" }]

const useCurrentPath = () => {
  const location = useLocation()
  console.log(location)
}
useCurrentPath()
  return (
    <main>
      <nav>
        <div id="top">
          <header>PC SHOP</header>
          <div className="nav-links">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
            >
              HOME
            </NavLink>
            <NavLink to="shop?type=all">SHOP</NavLink>
            <NavLink to="checkout">
              <img className="cart" src={shp_cart} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="wave"></div>
      </nav>
      <Outlet context={addToBuyingThese} />
    </main>
  );
}

export default Navbar;
