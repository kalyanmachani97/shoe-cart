import React from 'react'
import { Badge, Container,  Navbar, } from 'react-bootstrap'
import {BsCart3} from 'react-icons/bs';
import {IoMdFootball} from 'react-icons/io';

import { Link } from 'react-router-dom';
import './home.css';
const Header = (props) => {
    
  return (
    <Navbar bg='dark' variant='dark' style={{height:'80px'}}>
        <Container>
            <Navbar.Brand>
                <Link to='#'>KC<IoMdFootball color='white' fontSize='15'/></Link>
            </Navbar.Brand>
            <Link to="/Cart">
            <button  id='headerbtn'><BsCart3 color='white' fontSize='25px'/><Badge style={{fontSize:'15px'}}>{props.count}</Badge></button>
            </Link>
        </Container>
    </Navbar>
  )
}

export default Header;