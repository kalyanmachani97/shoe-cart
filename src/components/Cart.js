import React, { useEffect } from 'react'
import { useState} from 'react';
import { ListGroup } from 'react-bootstrap';
import { CartState } from '../Context/context';
import Home from './Home';
const Cart = (props) => {
  const plist=props.list;
  const pcount=props.count;
  const pqty=props.qty;
  console.log(pcount,pqty)
  const [product1, setProduct1] = useState([
    {
      url: 'https://5.imimg.com/data5/PO/HQ/MY-18909858/studs-shoes-blue-1-1000x1000.jpg',
      name: 'Messi Named Shoes',
      category: 'Shoes',
      seller: 'Messi',
      price: 3999,
      id:30
    },
    {
      url: 'https://www.soccerbible.com/media/85576/messi-gold2.jpg',
      name: 'Messi Gold Shoes',
      category: 'Shoes',
      seller: 'Messi',
      price: 12999,
      id:10
    },
    {
      url: 'https://m.media-amazon.com/images/I/41L9rZtFnoL.jpg',
      name: 'Ronaldo Shoes',
      category: 'Shoes',
      seller: 'Ronaldo',
      price: 4999,
      id:7
    },
    {
      url: 'https://m.media-amazon.com/images/I/71X5ufr-hFL._UL1500_.jpg',
      name: 'Neymar Shoes',
      category: 'Shoes',
      seller: 'Neymar',
      price: 3999,
      id:11
    },
    
  ])
  props.list.map(val=>{
  
  })
  const QtyAdding=(data)=>{
 

        props.setQty({...props.qty,[data]:props.qty[data]+1})

    
}
  const QtySub=(data)=>{
    props.setQty({...props.qty,[data]:props.qty[data]-1})
}

console.log(props.list)
  return (<>
        <h1>{product1.map(product=><div key={product.id}>{
          
          props.list.map(val=><div key={val.id}>{val.id==product.id
            &&
            (<div style={{display:'flex',margin:'2%'}}>
              {props.qty[product.id]<=0? null: <div >
              <img src={product.url} width='90'></img>
              <h5>{product.name}</h5>
              <h5>{props.qty[product.id]}  *  ₹{product.price}</h5>
              <h4>=₹{product.price*props.qty[product.id]}</h4>
              </div>}
              <div style={{marginLeft:'2%'}}>
              {props.qty[product.id]<=0? null:
                  <div>
                     <button   onClick={()=>{props.setCount(props.count-1);
                      {
                        QtySub(product.id)
                      }
                    }}>-</button>
                     
                      <b><p>{props.qty[product.id]}</p></b>
                  <button onClick={()=>{props.setCount(props.count+1);
                  {
                    QtyAdding(product.id)
                  }
                  }}>+</button>
                  </div>}
              </div>
              </div>)  }
              </div>
          )
          
        }</div>)}</h1>
    </>)
}

export default Cart;