import React, { useState } from 'react'
import './home.css';
import { CartState } from '../Context/context';
import SingleProduct from './SingleProduct';
import { useEffect } from 'react';

const Home = (props) => {
  const {state: {Products}, }= CartState();
   const plist=props.list;
  const pqty=props.qty;
  const pcount=props.count?props.count:0;
  const [count,setCount]=useState(pcount);
 
  
  console.log(plist,pcount,pqty)
  useEffect(()=>{
    console.log("home",count)
  },[count])
  
  const Add=(data)=>{
    
    props.setList([...props.list,data])
  }
 
  
  return <div className='home'>
    <div className='productContainer'>
        {Products.map((prod)=>{
          return  <SingleProduct trigger1={(val)=>{Add(val)}} qty={props.qty} pcount={pcount} setQty={props.setQty} prod={prod} key={prod.id} setCount={(val)=>{setCount(val);props.setCount(val)}} count={count}/>
        })}
    </div>
  </div>
}

export default Home;