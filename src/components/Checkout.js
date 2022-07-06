import React from "react";
import { useOutletContext } from "react-router-dom";
import CheckoutCard from "./CheckoutCard";
function Checkout() {
  const { buyingThese,purchase } = useOutletContext();
  return (
    <div className="checkout-container">
      {buyingThese.length === 0 ? (
        <div className="bigger">You have nothing in your cart.</div>
      ) : (
        buyingThese.map((x) => (
          <CheckoutCard
            key={x.id}
            id={x.id}
            name={x.name}
            img1={x.img1}
            img2={x.img2}
            price={x.price}
            type={x.type}
            quantity={x.quantity}
          />
        ))
      )}
      {buyingThese.length === 0 ? (
        ""
      ) : (
        <div>
          <div className="bigger">
            Total: $
            {buyingThese.reduce(
              (prev, current) =>
              prev+
                parseInt(current.price) * current.quantity,
              0
            )}
          </div>
          <button className="add-to-cart" onClick={purchase}>Purchase</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
