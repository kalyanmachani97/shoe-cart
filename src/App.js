 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
function App(props) {
  const [count,setCount]=useState(0);
  const [list,setList]=useState([]);
  const [qty,setQty]=useState({});
  const plist=props.plist;
  const pqty=props.qty;
  const pcount=props.count;
  console.log(plist,pqty)
  useEffect(()=>{
    console.log("=>",qty)
  },[qty])
  return (
    <BrowserRouter>
      <Header count={count}/>
      <div>
        <Routes>
        <Route path='/' element={<Home  setCount={setCount} count={count} list={list} qty={qty} setQty={setQty} setList={setList}/>}/>
        <Route path='/Cart' element={<Cart setCount={setCount}  count={count}  list={list} qty={qty} setQty={setQty}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
