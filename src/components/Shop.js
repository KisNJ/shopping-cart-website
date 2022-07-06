import React,{useEffect,useState} from 'react'
import {Link,useSearchParams} from 'react-router-dom'
import data from "../data.json"
import DisplayCard from './DisplayCard'
function Shop() {
  let [searchParams,setSearchParams]=useSearchParams()
  const [displayThese,setDisplayThese]=useState([])
  //console.log(searchParams.get("type"))
  useEffect(()=>{
    let type=searchParams.get("type")
    if(type==="all"){
      setDisplayThese([...data])
    }else{
      setDisplayThese([...data.filter(x=>x.type===type)])
    }
  },[searchParams])
  function getPillStyle(){
    let type=searchParams.get("type")
    if(type==="all"){
      return{
        left:"0",
        width:"100px"
      }
    }
    if(type==="cpu"){
      return{
        right:"0",
        width:"130px"
      }
    }
    if(type==="memory"){
      return{
        left:"103px",
        width:"130px"
      }
    }
    if(type==="gpu"){
      return{
        left:"244px",
        width:"120px"
      }
    }
  }
  return (
    <div id="rest">
      <h1 className='shop'>Shop</h1>
      <div className='container'>
        <div className='container-shop-nav'>
        <div className="shop-nav">
          <div className='bacgtound-pill' style={getPillStyle()}></div>
          <Link to='/shopping-cart-website/shop?type=all'>All</Link>
          <Link to='/shopping-cart-website/shop?type=memory'>RAM</Link>
          <Link to='/shopping-cart-website/shop?type=gpu'>GPU</Link>
          <Link to='/shopping-cart-website/shop?type=cpu'>CPU</Link>
        </div>
        </div>
        <div id="items">
          {displayThese.map(x=><DisplayCard key={x.id} id={x.id} name={x.name} img1={x.img1} img2={x.img2} price={x.price} type={x.type} />)}
        </div>
      </div>
    </div>
  )
}

export default Shop