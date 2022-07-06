import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import shp_cart from "../images/shopping_cart_checkout.svg";
import {useLocation } from "react-router-dom";
function Navbar() {
  const [buyingThese, setBuyingThese] = useState([]);
  function addToBuyingThese(item) {
    let temp = [...buyingThese];
    if (temp.some((thing) => parseInt(thing.id) === parseInt(item.id))) {
      temp = temp.map((thing) => {
        if (parseInt(thing.id) === parseInt(item.id)) {
          return { ...thing, quantity: thing.quantity + item.quantity };
        } else {
          return thing;
        }
      });
      setBuyingThese([...temp]);
    } else {
      let temp = [...buyingThese];
      temp = [...temp, item];
      setBuyingThese([...temp]);
    }
  }
  function removeFromBuyingThese(item) {
    let temp = [...buyingThese];
    temp = temp.map((thing) => {
      if (parseInt(thing.id) === parseInt(item.id)) {
        return { ...thing, quantity: thing.quantity - item.remove_quantity };
      } else {
        return thing;
      }
    });
    temp = temp.filter((x) => x.quantity > 0);
    setBuyingThese([...temp]);
  }
  let activeStyle = {
    textDecoration:"underline"
  };
  const useIsHomeACtive=()=>{
    let path=useLocation()
    if(path.pathname.split('/').filter(x=>x!=="").length>1){
      return false
    }
    return true
  }
  function purchase(){
    alert("Thanks for your purchase!")
    setBuyingThese([])
  }
  let isHome=useIsHomeACtive()

  return (
    <main>
      <nav>
        <div id="top">
          <header>
          <NavLink
              to="/shopping-cart-website"
            >
            PC SHOP
          </NavLink>
          </header>
          <div className="nav-links">
            <NavLink
            className={() => (isHome ? "activeStyle" : "")}
              to="/shopping-cart-website"
            >
              <div className="hover-underline">
              HOME

              </div>
            </NavLink>
            <NavLink to="shop?type=all"  className={({ isActive }) => (isActive ? "activeStyle" : "")}> <div className="hover-underline">
              SHOP

              </div></NavLink>
            <NavLink to="checkout">
              <div className="cart-container">
                <img className="cart" src={shp_cart} alt="" />
                <div className="small-count">{buyingThese.length}</div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="wave"></div>
      </nav>
      <Outlet
        context={{ addToBuyingThese, buyingThese, removeFromBuyingThese,purchase }}
      />
    </main>
  );
}

export default Navbar;
