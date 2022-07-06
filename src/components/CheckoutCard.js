import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
function CheckoutCard({ id, name, price, img1, img2, type, quantity }) {
  const { addToBuyingThese, removeFromBuyingThese } = useOutletContext();
  const [numberOfItems, setNumberOfItems] = useState(1);
  const [removeThisAmount, setRemoveThisAmount] = useState(1);
  function changeValue(e) {
    if (parseInt(e.target.value) > 5) {
      setNumberOfItems(5);
    } else if (parseInt(e.target.value) < 0) {
      setNumberOfItems(0);
    } else {
      setNumberOfItems(parseInt(e.target.value));
    }
  }
  function changeRemoveValue(e) {
    if (parseInt(e.target.value) > 5) {
      setRemoveThisAmount(5);
    } else if (parseInt(e.target.value) < 0) {
      setRemoveThisAmount(0);
    } else {
      setNumberOfItems(parseInt(e.target.value));
    }
  }
  return (
    <div className="chechkout-card">
      <div>
      <div className="img-container">
        <img src={require(`../product_imgs/${img1}.jpg`)} className="img1"alt="" />
        <img src={require(`../product_imgs/${img2}.jpg`)} className="img2" alt="" />
      </div>
        <div>
          <div className="bigger">{name}</div>
          <div className="bigger">{type}</div>
          <div className="bigger">
            PRICE: ${price} * {quantity}=${price * quantity}
          </div>
        </div>
      </div>
      <div className="buttons">
        <input
          type="number"
          value={numberOfItems}
          onChange={changeValue}
          id="quantity"
          name="quantity"
          min="0"
          max="5"
        ></input>
        <button
          className="add-to-cart"
          onClick={()=>{
            addToBuyingThese({ id, name, price, img1, img2, type, quantity: numberOfItems })
            setNumberOfItems(1)
          }}
        >
          Add to cart
        </button>
        <button
          className="add-to-cart remove"
          onClick={()=>{
            removeFromBuyingThese({ id, name, price, img1, img2, type, quantity: numberOfItems,remove_quantity:removeThisAmount })
            setNumberOfItems(1)
          }}
        >
          Remove from cart
        </button>
        <input
          type="number"
          value={removeThisAmount}
          onChange={changeRemoveValue}
          id="remove_quantity"
          name="remove_quantity"
          min="0"
          max="5"
        ></input>
      </div>
    </div>
  );
}

export default CheckoutCard;
