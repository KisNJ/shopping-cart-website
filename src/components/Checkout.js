import React from 'react'
import {useOutletContext} from 'react-router-dom'
import CheckoutCard from './CheckoutCard';
function Checkout() {
  const {buyingThese} = useOutletContext();
  return (
    <div className='checkout-container'>
      {buyingThese.map(x=><CheckoutCard key={x.id} id={x.id} name={x.name} img1={x.img1} img2={x.img2} price={x.price} type={x.type} quantity={x.quantity}/>) }
    </div>
  )
}

export default Checkout