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
  return (
    <div id="rest">
      <h1 className='shop'>Shop</h1>
      <div className='container'>
        <div className="shop-nav">
          <Link to='/shop?type=all'>All</Link>
          <Link to='/shop?type=memory'>RAM</Link>
          <Link to='/shop?type=gpu'>GPU</Link>
          <Link to='/shop?type=cpu'>CPU</Link>
        </div>
        <div id="items">
          {displayThese.map(x=><DisplayCard id={x.id} name={x.name} img1={x.img1} img2={x.img2} price={x.price} type={x.type} />)}
        </div>
      </div>
    </div>
  )
}

export default Shop