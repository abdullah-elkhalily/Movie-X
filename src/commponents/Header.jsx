import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux/es';
import { Link } from 'react-router-dom';
import'./header.css'
import SearchMovies from './search';
const Head = () => {

  const [srchDsBlock, setSrchDsBlock] = useState(false)
  const cont = useSelector((State) => State.counter.counter);

  var stylhead={textDecorationLine:'none'}

  return (
    <>
        <Navbar className='bg-dark' >
      
        <Link  style={stylhead}className=' movieLogo' to="/">IMDB</Link>
          <Nav className="me-aut w-100" >
 

         <div className=' search'>   
            <SearchMovies setSrchDsBlock={setSrchDsBlock}></SearchMovies>     
            </div>
         
            <div className='watshli'>
        
   <Link style={{color:'white',textDecorationLine:'none'}}className='mx-3 watch' to="/favorit"> 
   <i className="fa-regular fa-bookmark watshlist" > <p className='plus'>+</p></i>      Watshlist</Link>   

              </div>
           
          </Nav>
       
      </Navbar> 
    </>
  )
}

export default Head
