import React from "react";
import data from "../data.json";
import { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard";
function Home() {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    function get2DifRndInts() {
      let arr = [];
      let rnd = Math.floor(Math.random() * 10);
      arr = [...arr, rnd];
      rnd = Math.floor(Math.random() * 10);
      if(!arr.includes(rnd)){
        return [...arr,rnd]
      }
      while (arr.includes(rnd)) {
        rnd = Math.floor(Math.random() * 10);
        if(!arr.includes(rnd)){
          return [...arr,rnd]
        }
      }
      return arr;
    }
    let numbers=get2DifRndInts()
    let foundarr=numbers.map(n=>data.find(x=>x.id===n.toString()))
    setFeatured([...foundarr])
  }, []);

  return (
    <div id="rest">
      <h1>Recommended for you</h1>
      <div id="featured">
        {featured.map(x=><DisplayCard key={x.id} id={x.id} name={x.name} img1={x.img1} img2={x.img2} price={x.price} type={x.type} />)}
      </div>
    </div>
  );
}

export default Home;
