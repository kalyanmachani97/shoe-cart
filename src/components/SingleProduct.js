import {React,useState} from 'react'
import { Card } from 'react-bootstrap'


import './home.css'
const SingleProduct = (props) => {   
    const pcount=props.count?props.count:0;
    const [count, setCount] = useState(pcount);
    const IdAdding=(data)=>{
        props.setQty({...props.qty,[data]:1})
    }
    const QtyAdding=(data)=>{
        console.log(data)

            props.setQty({...props.qty,[data]:props.qty[data]+1})

        
    }
    const QtySub=(data)=>{
        props.setQty({...props.qty,[data]:props.qty[data]-1})
    }
    console.log("singleProduct",count,props.qty)
  return (
    <div className='products'>
        <Card>
            <Card.Img variant='top' src={props.prod.image} alt={props.prod.name}/>
            <Card.Body>
                
                <Card.Title>{props.prod.name}</Card.Title>
                <Card.Subtitle style={{paddingBottom:10}}>
                    <span>₹ {props.prod.price}</span>
                </Card.Subtitle>
                {count<=0? <button onClick={
                    ()=>{setCount(count+1);props.setCount(props.count+1);props.trigger1(props.prod);
                    {
                        IdAdding(props.prod.id)
                    }
                    }   
                    }>Add to Cart</button>
                    :<div className='btn'>
                <button onClick={()=>{setCount(count-1);props.setCount(props.count-1);{
                    QtySub(props.prod.id)
                }}}>-</button>
                <p>{props.qty[props.prod.id]?props.qty[props.prod.id]:0}</p>
                <button onClick={()=>{setCount(count+1);props.setCount(props.count+1);{
                    QtyAdding(props.prod.id)
                }}}>+</button>
                </div>}
               
            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct